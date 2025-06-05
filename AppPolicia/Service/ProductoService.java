package org.example.spring.AppPolicia.Service;

import org.example.spring.AppPolicia.Clases.Producto;
import org.example.spring.AppPolicia.Respository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto>obtenerTodos(){
        return productoRepository.findAll();
    }
    public Producto guardar(Producto producto){
        Optional<Producto>existente=productoRepository.findByNombre(producto.getNombre());
        if(existente.isPresent()){
            throw new IllegalArgumentException("Ya existe un producto con ese nombre");
        }
        if(producto.getPrecio().compareTo(BigDecimal.valueOf(40))<0){
            producto.setDescripcion(producto.getDescripcion()+ " -Producto en oferta");
        }
        return productoRepository.save(producto);
    }

    public Producto actualizarStock(int id, int cantidadSumar) {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
        int stockActual = producto.getStock();
        // Validar que no se permita cantidad 0 o negativa en suma
        if (cantidadSumar == 0) {
            throw new IllegalArgumentException("La cantidad no puede ser cero");
        }
        // Si se intenta quitar stock (cantidadSumar < 0)
        if (cantidadSumar < 0) {
            int cantidadQuitar = -cantidadSumar;
            if (cantidadQuitar > stockActual) {
                throw new IllegalArgumentException("No se puede quitar más stock del disponible");
            }
        }
        producto.setStock(stockActual + cantidadSumar);
        return productoRepository.save(producto);
    }

    public boolean eliminarProducto(Integer id) {
        if (productoRepository.existsById(id)) {
            productoRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    public Producto actualizarProducto(Integer id, Producto nuevoProducto) {
        Producto productoExistente = productoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

        productoExistente.setNombre(nuevoProducto.getNombre());
        productoExistente.setDescripcion(nuevoProducto.getDescripcion());
        productoExistente.setPrecio(nuevoProducto.getPrecio());
        productoExistente.setStock(nuevoProducto.getStock());
        productoExistente.setImagen_url(nuevoProducto.getImagen_url());

        return productoRepository.save(productoExistente);
    }
    public Producto buscarPorId(Integer id) {
        return productoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }





}
