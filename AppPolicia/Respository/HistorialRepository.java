package org.example.spring.AppPolicia.Respository;

import org.example.spring.AppPolicia.Clases.Historial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HistorialRepository extends JpaRepository<Historial,Integer> {
    List<Historial>findByUsuarioId(int id);
}
