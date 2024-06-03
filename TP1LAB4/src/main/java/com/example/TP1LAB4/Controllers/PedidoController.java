package com.example.TP1LAB4.Controllers;

import com.example.TP1LAB4.Entities.Instrumento;
import com.example.TP1LAB4.Entities.Pedido;
import com.example.TP1LAB4.Services.Impl.InstrumentoServiceImpl;
import com.example.TP1LAB4.Services.Impl.PedidoServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/Pedido")
public class PedidoController extends BaseControllerImpl<Pedido, PedidoServiceImpl> {

}