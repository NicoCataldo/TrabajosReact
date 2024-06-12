package com.example.TP1LAB4.Entities;

import jakarta.persistence.*;
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
@Table(name = "DetallePedido")
public class DetallePedido extends Base{

    private int cantidad;

    @ManyToOne(optional = false)
    @JoinColumn(name = "IdInstrumento")
    private Instrumento instrumento;




}
