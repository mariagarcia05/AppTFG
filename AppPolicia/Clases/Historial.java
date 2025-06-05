package org.example.spring.AppPolicia.Clases;

import jakarta.persistence.*;
import org.example.spring.AppPolicia.Clases.MetodoPago;
import org.example.spring.AppPolicia.Clases.Producto;
import org.example.spring.AppPolicia.Clases.Usuario;

@Entity
@Table(name = "historial")
public class Historial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "idproducto",referencedColumnName = "id", nullable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "idusuario",referencedColumnName = "id", nullable = false)
    private Usuario usuario;

    @Column(nullable = false)
    private int cantidad;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false, length = 100)
    private String apellido;

    @Column(nullable = false, length = 20)
    private String telefono;

    @Column(nullable = false, length = 255)
    private String domicilio;

    @Column(name = "metodo_pago",nullable = false)
    @Enumerated(EnumType.STRING)
    private MetodoPago metodoPago;

    public Historial() {
    }

    public Historial(Long id, Producto producto, Usuario usuario, int cantidad, String nombre, String apellido, String telefono, String domicilio, MetodoPago metodoPago) {
        this.id = id;
        this.producto = producto;
        this.usuario = usuario;
        this.cantidad = cantidad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.domicilio = domicilio;
        this.metodoPago = metodoPago;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    public MetodoPago getMetodoPago() {
        return metodoPago;
    }

    public void setMetodoPago(MetodoPago metodoPago) {
        this.metodoPago = metodoPago;
    }
}
