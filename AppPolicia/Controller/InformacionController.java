package org.example.spring.AppPolicia.Controller;

import jakarta.validation.Valid;
import org.example.spring.AppPolicia.Clases.Informacion;
import org.example.spring.AppPolicia.Service.InformacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/informacion")
public class InformacionController {
    @Autowired
    private InformacionService informacionService;

    @PostMapping
    public ResponseEntity<String>guardar(@RequestBody @Valid Informacion informacion){
        try {
            Informacion informacionGuardar=informacionService.guardar(informacion);
            return ResponseEntity.ok("información enviada con éxito");
        }catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("error interno al enviar la información");
        }

    }
}
