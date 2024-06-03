package com.example.TP1LAB4.Controllers;

import com.example.TP1LAB4.Entities.Categorias;

import com.example.TP1LAB4.Services.Impl.CategoriasServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "api/v1/Categorias")
public class CategoriasController extends BaseControllerImpl<Categorias, CategoriasServiceImpl> {
}