package com.example.TP1LAB4.Services.Impl;

import com.example.TP1LAB4.Entities.DetallePedido;
import com.example.TP1LAB4.Repositories.BaseRepository;
import com.example.TP1LAB4.Repositories.DetallePedidoRepository;
import com.example.TP1LAB4.Services.DetallePedidoService;
import com.example.TP1LAB4.Services.Impl.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetallePedidoServiceImpl extends BaseServiceImpl<DetallePedido, Long> implements DetallePedidoService {
    @Autowired
    private DetallePedidoRepository detallePedidoRepository;

    public DetallePedidoServiceImpl(BaseRepository<DetallePedido, Long> baseRepository, DetallePedidoRepository detallePedidoRepository) {
        super(baseRepository);
        this.detallePedidoRepository = detallePedidoRepository;
    }

    @Override
    public List<DetallePedido> findAll() throws Exception {
        try {
            List<DetallePedido> entities = baseRepository.findAll();
            return entities;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
