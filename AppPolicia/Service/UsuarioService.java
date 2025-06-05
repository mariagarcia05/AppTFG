package org.example.spring.AppPolicia.Service;

import org.example.spring.AppPolicia.Clases.MoldeLogin;
import org.example.spring.AppPolicia.Clases.Usuario;
import org.example.spring.AppPolicia.Respository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario>obtenerTodos(){
        return usuarioRepository.findAll();
    }

    public Optional<Usuario>obtenerPorId(int id){
        return usuarioRepository.findById(id);
    }
    public Usuario guardar(Usuario usuario){
        Optional<Usuario>existente=usuarioRepository.findByUsuario(usuario.getUsuario());
        if(existente.isPresent()){
            throw new IllegalArgumentException("Ya existe un usuario con este nombre");
        }
        return usuarioRepository.save(usuario);
    }
    public boolean actualizar(Usuario nuevoUsuario){
        Optional<Usuario>usuarioExistente=usuarioRepository.findById(nuevoUsuario.getId());
        if(usuarioExistente.isPresent()){
            usuarioRepository.save(nuevoUsuario);
            return true;
        }
        return false;
    }
    public boolean eliminar(int id){
        if(usuarioRepository.existsById(id)){
            usuarioRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public Usuario login(@RequestBody MoldeLogin moldeLogin) {
        System.out.println("Usuario recibido: " + moldeLogin.getUsuario());
        System.out.println("Password recibida: " + moldeLogin.getPassword());

        Optional<Usuario> usuario = usuarioRepository.findByUsuarioAndPassword(
                moldeLogin.getUsuario(),
                moldeLogin.getPassword()
        );
        return usuario.orElse(null);
    }

}
