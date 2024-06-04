package com.example.TP1LAB4.Controllers;

import com.example.TP1LAB4.Entities.Instrumento;
import com.example.TP1LAB4.Entities.Pedido;
import com.example.TP1LAB4.Entities.PreferenceMp;
import com.example.TP1LAB4.Services.Impl.InstrumentoServiceImpl;
import com.example.TP1LAB4.Services.Impl.PedidoServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/Pedido")
public class PedidoController extends BaseControllerImpl<Pedido, PedidoServiceImpl> {

    @PostMapping("create_preference_mp")
    public PreferenceMp crearPreferenciaMercadoPago(@RequestBody Pedido pedido){
        MercadoPagoController cMercadoPago = new MercadoPagoController();
        PreferenceMp preference = cMercadoPago.getPreferenciaIdMercadoPago(pedido);
        return preference;
    }

}