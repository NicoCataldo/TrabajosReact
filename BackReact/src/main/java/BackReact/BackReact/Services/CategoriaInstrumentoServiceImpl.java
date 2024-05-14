package BackReact.BackReact.Services;

import BackReact.BackReact.Entities.CategoriaInstrumento;
import BackReact.BackReact.Repositories.BaseRepository;
import BackReact.BackReact.Repositories.CategoriaInstrumentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaInstrumentoServiceImpl extends BaseServiceImpl<CategoriaInstrumento, Long> implements CategoriaInstrumentoService {
    @Autowired
    private CategoriaInstrumentoRepository CategoriaInstrumentoRepository;
    public CategoriaInstrumentoServiceImpl(BaseRepository<CategoriaInstrumento, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<CategoriaInstrumento> findAll() throws Exception {
        try {
            List<CategoriaInstrumento> entities = baseRepository.findAll();
            return entities;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
