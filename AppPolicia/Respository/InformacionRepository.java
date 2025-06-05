package org.example.spring.AppPolicia.Respository;

import org.example.spring.AppPolicia.Clases.Informacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InformacionRepository extends JpaRepository<Informacion,Integer> {
}
