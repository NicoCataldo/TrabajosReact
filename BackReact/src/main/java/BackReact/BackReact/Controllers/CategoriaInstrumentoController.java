package BackReact.BackReact.Controllers;

import BackReact.BackReact.Entities.CategoriaInstrumento;
import BackReact.BackReact.Services.CategoriaInstrumentoServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "api/v1/Categorias")
public class CategoriaInstrumentoController extends BaseControllerImpl<CategoriaInstrumento, CategoriaInstrumentoServiceImpl> {
}
