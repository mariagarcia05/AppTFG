package org.example.spring.AppPolicia.Controller;

import org.example.spring.AppPolicia.Clases.Historial;
import org.example.spring.AppPolicia.Service.HistorialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/historial")
public class HistorialController {
    @Autowired
    private HistorialService historialService;
    @PostMapping
    public ResponseEntity<Map<String,String>>guardar(@RequestBody Historial historial){
        String mensaje=historialService.guardar(historial);
        Map<String,String>response=new HashMap<>();
        response.put("message",mensaje);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/{idUsuario}")
    public ResponseEntity<List<Historial>>obtenerHistorial(@PathVariable int idUsuario){
        List<Historial>historial=historialService.obtenerHistorialPorUsuario(idUsuario);
        return ResponseEntity.ok(historial);
    }

}
