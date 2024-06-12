package com.example.TP1LAB4.Controllers;


import com.example.TP1LAB4.Entities.Usuario;
import com.example.TP1LAB4.Services.Impl.UsuarioServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/Usuario")
public class UsuarioController extends BaseControllerImpl<Usuario, UsuarioServiceImpl> {
}
