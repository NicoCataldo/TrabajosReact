package BackReact.BackReact.Services;

import BackReact.BackReact.Entities.Instrumento;
import BackReact.BackReact.Repositories.BaseRepository;
import BackReact.BackReact.Repositories.InstrumentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstrumentoServiceImpl extends BaseServiceImpl<Instrumento,Long> implements InstrumentoService {
    @Autowired
    private InstrumentoRepository empresaRepository;

    public InstrumentoServiceImpl(BaseRepository<Instrumento, Long> baseRepository, InstrumentoRepository empresaRepository) {
        super(baseRepository);
        this.empresaRepository = empresaRepository;
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
