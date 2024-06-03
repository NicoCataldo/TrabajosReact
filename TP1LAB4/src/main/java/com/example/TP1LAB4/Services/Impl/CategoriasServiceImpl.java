package com.example.TP1LAB4.Services.Impl;

import com.example.TP1LAB4.Entities.Categorias;
import com.example.TP1LAB4.Repositories.BaseRepository;
import com.example.TP1LAB4.Services.CategoriasService;
import com.example.TP1LAB4.Services.Impl.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriasServiceImpl extends BaseServiceImpl<Categorias, Long> implements CategoriasService {
    @Autowired
    private com.example.TP1LAB4.Repositories.CategoriasRepository CategoriasRepository;
    public CategoriasServiceImpl(BaseRepository<Categorias, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<Categorias> findAll() throws Exception {
        try {
            List<Categorias> entities = baseRepository.findAll();
            return entities;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
