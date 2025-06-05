package org.example.spring.AppPolicia.Clases;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.time.Instant;
import java.time.LocalDate;

@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 50)
    @NotNull(message = "el nombre no puede estar vacío")
    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;

    @Size(max = 100)
    @NotNull(message = "el apellido no puede estar vacío")
    @Column(name = "apellidos", nullable = false, length = 100)
    private String apellidos;

    @Pattern(regexp = "^[0-9]{9}$",message = "El teléfono debe contener exactamente 9 dígitos numéricos")
    @Size(max = 15)
    @NotNull(message = "el telefono no puede estar vacío")
    @Column(name = "telefono", nullable = false, length = 15)
    private String telefono;

    @Email(message = "El correo no es válido")
    @Size(max = 100)
    @NotNull(message = "el correo no puede estar vacío")
    @Column(name = "correo", nullable = false, length = 100)
    private String correo;

    @Size(max = 50)
    @NotNull(message = "el usuario no puede estar vacío")
    @Column(name = "usuario", nullable = false, length = 50)
    private String usuario;

    @Size(max = 255)
    @NotNull(message = "la password no puede estar vacía")
    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "fecha_registro")
    private LocalDate fechaRegistro;

    public Usuario() {
        // Autogenerar la fecha de registro
        this.fechaRegistro = LocalDate.now();
    }


    public Usuario(Integer id, String nombre, String apellidos, String telefono, String correo, String usuario, String password, Instant fechaRegistro) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.correo = correo;
        this.usuario = usuario;
        this.password = password;
        this.fechaRegistro = LocalDate.from(fechaRegistro);
    }

    public Usuario(String nombre, String apellidos, String telefono, String correo, String usuario, String password, Instant fechaRegistro) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.correo = correo;
        this.usuario = usuario;
        this.password = password;
        this.fechaRegistro = LocalDate.from(fechaRegistro);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Instant fechaRegistro) {
        this.fechaRegistro = LocalDate.from(fechaRegistro);
    }


}