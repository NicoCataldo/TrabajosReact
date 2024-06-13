package com.example.TP1LAB4.Gestor;

import com.example.TP1LAB4.Entities.Instrumento;
import com.example.TP1LAB4.Services.InstrumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/Excel")
public class ExcelController {

    @Autowired
    private ExcelService excelService;

    @Autowired
    private InstrumentoService instrumentoService; // Servicio para obtener los instrumentos

    @GetMapping("")
    public ResponseEntity<InputStreamResource> downloadExcel() throws Exception {
        List<Instrumento> instrumentos = instrumentoService.findAll(); // Obtener lista de instrumentos desde el servicio

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        excelService.exportToExcel(instrumentos, out);

        ByteArrayInputStream in = new ByteArrayInputStream(out.toByteArray());
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=instrumentos.xlsx");

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(new InputStreamResource(in));
    }
}

