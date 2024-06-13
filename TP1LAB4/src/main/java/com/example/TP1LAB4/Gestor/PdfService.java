package com.example.TP1LAB4.Gestor;

import com.example.TP1LAB4.Entities.Instrumento;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import com.itextpdf.io.font.constants.StandardFonts;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import org.springframework.stereotype.Service;

@Service
public class PdfService {

    public byte[] generatePdf(Instrumento instrumento) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        PdfWriter writer = new PdfWriter(baos);
        PdfDocument pdfDoc = new PdfDocument(writer);
        Document document = new Document(pdfDoc);

        PdfFont font = PdfFontFactory.createFont(StandardFonts.HELVETICA);


        document.add(new Paragraph("Instrumento: " + instrumento.getInstrumento()).setFont(font));
        document.add(new Paragraph("Marca: " + instrumento.getMarca()).setFont(font));
        document.add(new Paragraph("Modelo: " + instrumento.getModelo()).setFont(font));
        document.add(new Paragraph("Imagen: " + instrumento.getImagen()).setFont(font));
        document.add(new Paragraph("Precio: " + instrumento.getPrecio()).setFont(font));
        document.add(new Paragraph("Costo de Envío: " + instrumento.getCostoEnvio()).setFont(font));
        document.add(new Paragraph("Cantidad Vendida: " + instrumento.getCantidadVendida()).setFont(font));
        document.add(new Paragraph("Descripción: " + instrumento.getDescripcion()).setFont(font));
        document.add(new Paragraph("Categoría: " + instrumento.getCategoriaString()).setFont(font));

        document.close();

        return baos.toByteArray();
    }
}
