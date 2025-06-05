package org.example.spring.AppPolicia.Respository;

import org.example.spring.AppPolicia.Clases.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductoRepository extends JpaRepository<Producto,Integer> {
    Optional<Producto>findByNombre(String nombre);
}
