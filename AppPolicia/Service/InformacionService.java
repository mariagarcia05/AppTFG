package org.example.spring.AppPolicia.Service;

import org.example.spring.AppPolicia.Clases.Informacion;
import org.example.spring.AppPolicia.Respository.InformacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InformacionService {
    @Autowired
    private InformacionRepository informacionRepository;

    public Informacion guardar(Informacion informacion){
        if(informacion==null){
            throw new IllegalArgumentException("La información no puede ser nula");
        }
        return informacionRepository.save(informacion);

    }
}
