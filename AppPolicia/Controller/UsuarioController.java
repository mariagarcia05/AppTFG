package org.example.spring.AppPolicia.Controller;

import jakarta.validation.Valid;
import org.example.spring.AppPolicia.Clases.MoldeLogin;
import org.example.spring.AppPolicia.Clases.Usuario;
import org.example.spring.AppPolicia.ErrorResponse;
import org.example.spring.AppPolicia.Respository.UsuarioRepository;
import org.example.spring.AppPolicia.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>>obtenerTodos(){
        List<Usuario>usuarios=usuarioService.obtenerTodos();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Cacheable
    public ResponseEntity<Optional<Usuario>>obtenerPorId(@PathVariable int id){
        try {
            Thread.sleep(3000);
            Optional<Usuario>usuario=usuarioService.obtenerPorId(id);
            return new ResponseEntity<>(usuario,HttpStatus.OK);
        }catch (InterruptedException e){
            throw new RuntimeException(e);
        }
    }

    @PostMapping
    public ResponseEntity<Object>guardar(@RequestBody @Valid Usuario usuario){
        try{
            Usuario usuarioGuardar=usuarioService.guardar(usuario);
            return ResponseEntity.ok(usuarioGuardar);
        }catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse(e.getMessage()));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String>actualizar(@RequestBody Usuario nuevoUsuario){
        boolean actualizado= usuarioService.actualizar(nuevoUsuario);
        if(actualizado){
            return ResponseEntity.ok("usuario actualizado con éxito");
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("usuario no encontrado");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String>eliminar(@PathVariable int id){
        boolean eliminado= usuarioService.eliminar(id);
        if(eliminado){
            return ResponseEntity.ok("usuario eliminado con éxito");
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("usuario no encontrado");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?>login(@RequestBody MoldeLogin moldeLogin){
        Usuario usuario= usuarioService.login(moldeLogin);
        if (usuario!=null){
            return ResponseEntity.ok(usuario);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("usuario no encontrado");
        }
    }


}
