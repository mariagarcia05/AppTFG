package org.example.spring.AppPolicia.Clases;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "informacion")
public class Informacion {
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

    @Size(max = 100)
    @NotNull(message = "el curso no puede estar vacío")
    @Column(name = "curso", nullable = false, length = 100)
    private String curso;

    @Size(max = 50)
    @NotNull(message = "la modalidad no puede estar vacía")
    @Column(name = "modalidad", nullable = false, length = 50)
    private String modalidad;

    @Size(max = 50)
    @NotNull(message = "la provincia no puede estar vacía")
    @Column(name = "provincia", nullable = false, length = 50)
    private String provincia;

    @Size(max = 15)
    @NotNull(message = "el telefono  no puede estar vacío")
    @Column(name = "telefono", nullable = false, length = 15)
    private String telefono;

    @Size(max = 100)
    @NotNull(message = "el email no puede estar vacío")
    @Column(name = "email", nullable = false, length = 100)
    private String email;

    public Informacion() {
    }

    public Informacion(Integer id, String nombre, String apellidos, String curso, String modalidad, String provincia, String telefono, String email) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
        this.modalidad = modalidad;
        this.provincia = provincia;
        this.telefono = telefono;
        this.email = email;
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

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getModalidad() {
        return modalidad;
    }

    public void setModalidad(String modalidad) {
        this.modalidad = modalidad;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}