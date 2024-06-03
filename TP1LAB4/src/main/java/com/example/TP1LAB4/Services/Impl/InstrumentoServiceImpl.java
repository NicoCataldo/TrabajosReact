package com.example.TP1LAB4.Services.Impl;

import com.example.TP1LAB4.Entities.Instrumento;
import com.example.TP1LAB4.Repositories.BaseRepository;
import com.example.TP1LAB4.Repositories.InstrumentoRepository;
import com.example.TP1LAB4.Services.Impl.BaseServiceImpl;
import com.example.TP1LAB4.Services.InstrumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstrumentoServiceImpl extends BaseServiceImpl<Instrumento,Long> implements InstrumentoService {
    @Autowired
    private InstrumentoRepository InstrumentoRepository;

    public InstrumentoServiceImpl(BaseRepository<Instrumento, Long> baseRepository, com.example.TP1LAB4.Repositories.InstrumentoRepository instrumentoRepository) {
        super(baseRepository);
        InstrumentoRepository = instrumentoRepository;
    }

    @Override
    public List<Instrumento> findAll() throws Exception {
        try {
            List<Instrumento> entities = baseRepository.findAll();
            return entities;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

}
