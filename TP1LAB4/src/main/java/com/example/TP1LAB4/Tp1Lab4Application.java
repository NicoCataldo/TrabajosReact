package com.example.TP1LAB4;

import com.example.TP1LAB4.Entities.*;
import com.example.TP1LAB4.Repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.time.LocalDate;


@SpringBootApplication
public class Tp1Lab4Application {
	@Autowired
	InstrumentoRepository instrumentoRepository;
	@Autowired
	CategoriasRepository categoriasRepository;

	@Autowired
	DetallePedidoRepository detallePedidoRepository;
	@Autowired
	PedidoRepository pedidoRepository;
	@Autowired
	UsuarioRepository usuarioRepository;
	public static void main(String[] args) {
		SpringApplication.run(Tp1Lab4Application.class, args);
		System.out.println("----------Estoy Funcionando----------");
	}
	@Bean
	CommandLineRunner init(InstrumentoRepository instrumentoRepository, CategoriasRepository categoriasRepository,
						   DetallePedidoRepository detallePedidoRepository,
							PedidoRepository pedidoRepository, UsuarioRepository usuarioRepository) {
		return args -> {
			System.out.println("-----------------ESTOY FUNCIONANDO---------");
			/*
			Categorias categoria1 = Categorias.builder()
					.denominacion("Cuerda")
					.build();

			Categorias categoria2 = Categorias.builder()
					.denominacion("Viento")
					.build();
			Categorias categoria3 = Categorias.builder()
					.denominacion("Percusion")
					.build();

			Categorias categoria4 = Categorias.builder()
					.denominacion("Teclado")
					.build();

			Categorias categoria5 = Categorias.builder()
					.denominacion("Electronico")
					.build();
			categoriasRepository.save(categoria1);
			categoriasRepository.save(categoria2);
			categoriasRepository.save(categoria3);
			categoriasRepository.save(categoria4);
			categoriasRepository.save(categoria5);
			Instrumento instrumento1 = Instrumento.builder()
					.instrumento("Mandolina Instrumento Musical Stagg Sunburst")
					.marca("Stagg")
					.modelo("M20")
					.imagen("https://www.heavenimagenes.com/heavencommerce/c98a269a-2842-4da0-a6e5-e0e155d29966/images/v2/STAGG/1808291259027891_03_medium.jpg")
					.precio(2450f)
					.costo(100f)
					.costoEnvio("G")
					.cantidadVendida(28)
					.descripcion("Estas viendo una excelente mandolina de la marca Stagg.")
					.categoria(categoria1)
					.build();
			instrumentoRepository.save(instrumento1);

			Instrumento instrumento2 = Instrumento.builder()
					.instrumento("Pandereta Pandero Instrumento Musical ")
					.marca("DyM ventas")
					.modelo("32 sonajas")
					.imagen("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5w1VD4sisWr3JQII2_p_a1cuhkFXzGNPpdmrB5s5-7Q&s")
					.precio(325f)
					.costo(200f)
					.costoEnvio("150")
					.cantidadVendida(10)
					.descripcion(" Pandereta - 32 sonajas metálicas. Más de 8 años vendiendo con 100 % de calificaciones POSITIVAS y clientes satisfechos !! ")
					.categoria(categoria3)
					.build();
			instrumentoRepository.save(instrumento2);

			Instrumento instrumento3 = Instrumento.builder()
					.instrumento("Triangulo Musical 24 Cm Percusion")
					.marca("LBP")
					.modelo("24")
					.imagen("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76yg8JWkcQBshWoVnJZwVmUGXq-5gf5o3MHwrlqgUMw&s")
					.precio(260f)
					.costo(100f)
					.costoEnvio("250")
					.cantidadVendida(3)
					.descripcion("Triangulo Musical de 24 Centímetros De Acero.")
					.categoria(categoria3)
					.build();
			instrumentoRepository.save(instrumento3);

			Instrumento instrumento4 = Instrumento.builder()
					.instrumento("Bar Chimes Lp Cortina Musical 72 Barras")
					.marca("FM")
					.modelo("LATIN")
					.imagen("https://http2.mlstatic.com/D_NQ_NP_670997-MLA31575604825_072019-O.webp")
					.precio(2250f)
					.costo(1000f)
					.costoEnvio("G")
					.cantidadVendida(2)
					.descripcion("BARCHIME CORTINA MUSICAL DE 25 BARRAS LATIN CUSTOM. Emitimos factura A y B")
					.categoria(categoria3)
					.build();
			instrumentoRepository.save(instrumento4);

			Instrumento instrumento5 = Instrumento.builder()
					.instrumento("Shekeres. Instrumento. Música. Artesanía.")
					.marca("Azalea Artesanías")
					.modelo("Cuentas de madera")
					.imagen("https://galeriaartesanalpr.com/cdn/shop/files/SHEKERE800LOGO1_b57b606d-b046-49c2-83cf-1819de952cec_600x.jpg?v=1693183399")
					.precio(850f)
					.costo(500f)
					.costoEnvio("300")
					.categoria(categoria3)
					.cantidadVendida(5)
					.descripcion("Las calabazas utilizadas para nuestras artesanías son sembradas y cosechadas por nosotros, quienes seleccionamos el mejor fruto para garantizar la calidad del producto y ofrecerle algo creativo y original.")
					.build();
			instrumentoRepository.save(instrumento5);

			Instrumento instrumento6 = Instrumento.builder()
					.instrumento("Antiguo Piano Aleman Con Candelabros.")
					.marca("Neumeyer")
					.modelo("Stratus")
					.imagen("https://http2.mlstatic.com/D_NQ_NP_741625-MLA25468412771_032017-O.webp")
					.precio(17000f)
					.costo(10000f)
					.costoEnvio("2000")
					.cantidadVendida(0)
					.categoria(categoria4)
					.descripcion("Buen dia! Sale a la venta este Piano Alemán Neumeyer con candelabros incluidos. Tiene una talla muy bonita en la madera. Una pieza de calidad.")
					.build();

			instrumentoRepository.save(instrumento6);

			Instrumento instrumento7 = Instrumento.builder()
					.instrumento("Guitarra Ukelele Infantil Grande 60cm")
					.marca("GUITARRA")
					.modelo("UKELELE")
					.imagen("https://http2.mlstatic.com/D_NQ_NP_602949-MLA32297056646_092019-O.webp")
					.precio(500f)
					.costo(100f)
					.costoEnvio("G")
					.cantidadVendida(5)
					.categoria(categoria1)
					.descripcion("Material	: Plástico similar a madera. 4 Cuerdas longitud: 60cm, el mejor regalo para usted, su familia y amigos, adecuado para 3-18 años de edad.")
					.build();
			instrumentoRepository.save(instrumento7);

			Instrumento instrumento8 = Instrumento.builder()
					.instrumento("Teclado Organo Electronico Musical Instrumento 54 Teclas")
					.marca("GADNIC")
					.modelo("T01")
					.imagen("https://http2.mlstatic.com/D_NQ_NP_851863-MLU71029857717_082023-O.webp")
					.precio(2250f)
					.costo(1200f)
					.costoEnvio("G")
					.cantidadVendida(13)
					.categoria(categoria5)
					.descripcion("Organo Electrónico GADNIC T01. Display de Led. 54 Teclas. 100 Timbres / 100 Ritmos. 4 1/2 octavas. 8 Percusiones. 8 Canciones de muestra. Grabación y reproducción. Entrada para Micrófono.")
					.build();
			instrumentoRepository.save(instrumento8);

			Instrumento instrumento9 = Instrumento.builder()
					.instrumento("Instrumentos De Percusión Niños Set Musical Con Estuche")
					.marca("KNIGHT")
					.modelo("LB17")
					.imagen("https://http2.mlstatic.com/D_NQ_NP_773874-MLA52856983256_122022-O.webp")
					.precio(2700f)
					.costo(1500f)
					.costoEnvio("300")
					.categoria(categoria3)
					.cantidadVendida(15)
					.descripcion("Estas viendo un excelente y completísimo set de percusión para niños con estuche rígido, equipado con los instrumentos más divertidos! ")
					.build();
			instrumentoRepository.save(instrumento9);

			Instrumento instrumento10 = Instrumento.builder()
					.instrumento("Batería Musical Infantil Juguete Niño 9 Piezas Palillos")
					.marca("Bateria")
					.modelo("Infantil")
					.imagen("https://http2.mlstatic.com/D_NQ_NP_643960-MLA27368744727_052018-O.webp")
					.precio(850)
					.costo(500f)
					.costoEnvio("250")
					.cantidadVendida(17)
					.categoria(categoria3)
					.descripcion("DESCRIPCIÓN: DE 1 A 3 AÑOS. EL SET INCLUYE 5 TAMBORES, PALILLOS Y EL PLATILLO TAL CUAL LAS FOTOS. SONIDOS REALISTAS Y FÁCIL DE MONTAR. MEDIDAS: 40X20X46 CM")
					.build();
			instrumentoRepository.save(instrumento10);

			Usuario usuario1 = Usuario.builder()
					.usuario("nico")
					.clave("123456")
					.rol(Roles.ADMIN)
					.build();
			usuarioRepository.save(usuario1);

			Usuario usuario2 = Usuario.builder()
					.usuario("visitante")
					.rol(Roles.USER)
					.clave("123456")
					.build();
			usuarioRepository.save(usuario2);


			*/
			
		};
	}
	
}
