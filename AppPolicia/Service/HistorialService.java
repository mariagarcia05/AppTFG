package org.example.spring.AppPolicia.Service;

import jakarta.transaction.Transactional;
import org.example.spring.AppPolicia.Clases.Historial;
import org.example.spring.AppPolicia.Clases.MetodoPago;
import org.example.spring.AppPolicia.Clases.Producto;
import org.example.spring.AppPolicia.Clases.Usuario;
import org.example.spring.AppPolicia.Respository.HistorialRepository;
import org.example.spring.AppPolicia.Respository.ProductoRepository;
import org.example.spring.AppPolicia.Respository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistorialService {
    @Autowired
    private HistorialRepository historialRepository;
    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Transactional
    public String guardar(Historial historial){
        //buscar un usuario por id
        Optional<Usuario>optionalUsuario=usuarioRepository.findById(historial.getUsuario().getId());
        if(optionalUsuario.isEmpty()){
            return "debes iniciar sesión para realizar la compra";
        }
        Usuario usuario=optionalUsuario.get();
        //buscar producto
        Optional<Producto>optionalProducto=productoRepository.findById(historial.getProducto().getId());
        if(optionalProducto.isEmpty()){
            return "el producto seleccionado no existe";
        }
        Producto producto=optionalProducto.get();
        //verificar stock
        if(historial.getCantidad()>producto.getStock()){
            return "no hay stock suficiente para realizar la compra";
        }
        //rellenar automáticamente lo datos del usuario
        historial.setNombre(usuario.getNombre());
        historial.setApellido(usuario.getApellidos());
        historial.setTelefono(usuario.getTelefono());
        historial.setProducto(producto);
        historial.setUsuario(usuario);
        //guardar la compra en el historial
        historialRepository.save(historial);
        //actualizar el stock del producto
        producto.setStock(producto.getStock()-historial.getCantidad());
        productoRepository.save(producto);
        return "compra realizada con éxito";

    }

    public List<Historial>obtenerHistorialPorUsuario(int idUsuario){
        return historialRepository.findByUsuarioId(idUsuario);
    }
}
