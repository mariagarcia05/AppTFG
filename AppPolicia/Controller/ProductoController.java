package org.example.spring.AppPolicia.Controller;

import jakarta.validation.Valid;
import org.example.spring.AppPolicia.Clases.Producto;
import org.example.spring.AppPolicia.Service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/producto")
@CacheConfig(cacheNames = {"producto"})
@CrossOrigin(origins = "http://localhost:3000")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @GetMapping
    public ResponseEntity<List<Producto>>obtenerProductos(){
        List<Producto>productos=productoService.obtenerTodos();
        return ResponseEntity.ok(productos);
    }
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> guardar(
            @RequestParam("nombre") String nombre,
            @RequestParam("descripcion") String descripcion,
            @RequestParam("precio") BigDecimal precio,
            @RequestParam("stock") int stock,
            @RequestParam("imagen") MultipartFile imagen) {

        try {
            // Ruta donde quieres guardar la imagen
            String nombreArchivo = imagen.getOriginalFilename();
            String rutaDestino = "C:/imagenes_subidas/" + nombreArchivo;

            File archivoDestino = new File(rutaDestino);
            archivoDestino.getParentFile().mkdirs(); // crea carpeta si no existe

            imagen.transferTo(archivoDestino);

            Producto producto = new Producto();
            producto.setNombre(nombre);
            producto.setDescripcion(descripcion);
            producto.setPrecio(precio);
            producto.setStock(stock);
            producto.setImagen_url("/imagenes_subidas/" + nombreArchivo); // guardar ruta relativa

            productoService.guardar(producto);
            return ResponseEntity.ok("producto guardado con éxito");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("error interno al guardar el producto");
        }
    }


    @PutMapping("/{id}/stock")
    public ResponseEntity<?> actualizarStock(@PathVariable int id, @RequestBody Map<String, Integer> body) {
        try {
            int cantidadSumar = body.get("stock");
            Producto actualizado = productoService.actualizarStock(id, cantidadSumar);
            return ResponseEntity.ok(actualizado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar el stock");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarProducto(@PathVariable Integer id) {
        if (productoService.eliminarProducto(id)) {
            return ResponseEntity.ok().body("Producto eliminado correctamente.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Producto no encontrado.");
        }
    }
    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> actualizarProducto(
            @PathVariable Integer id,
            @RequestParam("nombre") String nombre,
            @RequestParam("descripcion") String descripcion,
            @RequestParam("precio") Double precio,
            @RequestParam("stock") Integer stock,
            @RequestParam(value = "imagen", required = false) MultipartFile imagen
    ) {
        try {
            Producto productoExistente = productoService.buscarPorId(id);
            productoExistente.setNombre(nombre);
            productoExistente.setDescripcion(descripcion);
            productoExistente.setPrecio(BigDecimal.valueOf(precio));
            productoExistente.setStock(stock);

            if (imagen != null && !imagen.isEmpty()) {
                String nombreArchivo = System.currentTimeMillis() + "_" + imagen.getOriginalFilename();
                String ruta = "C:/imagenes_subidas/" + nombreArchivo;
                imagen.transferTo(new File(ruta));
                productoExistente.setImagen_url("/imagenes_subidas/" + nombreArchivo);
            }

            productoService.actualizarProducto(id, productoExistente);
            return ResponseEntity.ok(productoExistente);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar el producto");
        }
    }







}
