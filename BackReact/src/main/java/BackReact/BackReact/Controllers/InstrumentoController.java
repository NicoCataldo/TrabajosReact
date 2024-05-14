package BackReact.BackReact.Controllers;

import BackReact.BackReact.Entities.Instrumento;
import BackReact.BackReact.Services.InstrumentoServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/Instrumentos")
public class InstrumentoController extends BaseControllerImpl<Instrumento, InstrumentoServiceImpl>  {
}
