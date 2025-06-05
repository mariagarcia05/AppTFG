package org.example.spring.AppPolicia.Respository;

import org.example.spring.AppPolicia.Clases.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
    Optional<Usuario>findByUsuario(String nombre);
    Optional<Usuario>findByUsuarioAndPassword(String nombre, String password);
}
