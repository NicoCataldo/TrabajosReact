package com.example.TP1LAB4.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "Instrumento")
public class Instrumento extends Base {
    private String instrumento;
    private String marca;
    private String modelo;
    private String imagen;
    private double precio;
    private double costo;
    private String costoEnvio;
    private int cantidadVendida;
    private String descripcion;

    @ManyToOne(optional = false)
    @JoinColumn(name = "IdCategoria")
    private Categorias categoria;


    public String getPrecioString() {
        return String.valueOf(precio);
    }

    public String getcostoString() {
        return String.valueOf(costo);
    }
    public String getCategoriaString() {
        return categoria.getDenominacion();
    }
}