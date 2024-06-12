import Instrumento from "../Entidades/Instrumento";
import DetallePedido from "../Entidades/DetallePedido";
import Pedido from "../Entidades/Pedido";
import PreferenceMP from "../Entidades/PreferenceMp";

export function getAllInstrumentos(){
    return fetch(`http://localhost:9000/api/v1/Instrumentos`)
            .then(res=>res.json())
            .then(json=>json)
}

export function getOneInstrumento(id:number){
    return fetch(`http://localhost:9000/api/v1/Instrumentos/${id}`)
            .then(res=>res.json())
            .then(json=>json)
}

export function getAllCategorias(){
    return fetch(`http://localhost:9000/api/v1/Categorias`)
            .then(res=>res.json())
            .then(json=>json)
}

export function deleteInstrumento(id:number) {
    return fetch(`http://localhost:9000/api/v1/Instrumentos/${id}`, {
        method: 'DELETE'
    })
}

export function updateInstrumento(id: number, instrumento: any) {
    return fetch(`http://localhost:9000/api/v1/Instrumentos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(instrumento)
    })
}



export async function saveInstrumento(data: Instrumento): Promise<Instrumento> {
    const response = await fetch( "http://localhost:9000/api/v1/Instrumentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as Instrumento;
}

export async function saveDetallePedido(data: DetallePedido): Promise<DetallePedido> {
    const response = await fetch( "http://localhost:9000/api/v1/DetallePedido", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as DetallePedido;
}

export async function savePedido(data: Pedido): Promise<Pedido> {
    const response = await fetch( "http://localhost:9000/api/v1/Pedido", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as Pedido;
}

export function getAllPedidos(){
    return fetch(`http://localhost:9000/api/v1/Pedido`)
            .then(res=>res.json())
            .then(json=>json)
}

export function getAllUsuarios(){
    return fetch(`http://localhost:9000/api/v1/Usuario`)
            .then(res=>res.json())
            .then(json=>json)
}

export async function createPreferenceMP(pedido?:Pedido){
    let urlServer = "http://localhost:9000/api/v1/Pedido/create_preference_mp";
	let method:string = "POST";
    const response = await fetch(urlServer, {
	  "method": method,
	  "body": JSON.stringify(pedido),
	  "headers": {
		"Content-Type": 'application/json'
	  }
	});
    return await response.json() as PreferenceMP;   
}


export async function getDatosLinea(){
	const urlServer = 'http://localhost:9000/api/v1/Instrumentos/DataLine';
	const response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',

		},
        mode: 'cors'
	});
	console.log(response);
	return await response.json();
}

export async function getDatosTorta(){
    const urlServer = 'http://localhost:9000/api/v1/Instrumentos/DataTorta';
	const response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
		},
        mode: 'cors'
	});
	console.log(response);
	return await response.json();
}



/*
export function getInstrumentosJson(){
    let datos:Instrumento[] = [{
        "id":"1",
        "instrumento": "Mandolina Instrumento Musical Stagg Sunburst",
        "marca": "Stagg",
        "modelo": "M20",
        "imagen": "nro10.jpg",
        "precio": "2450",
        "costoEnvio": "G",
        "cantidadVendida": "28",
        "descripcion": "Estas viendo una excelente mandolina de la marca Stagg, con un sonido muy dulce, tapa aros y fondo de tilo, y diapasón de palisandro. Es un instrumento acústico (no se enchufa) de cuerdas dobles (4 pares) con la caja ovalada y cóncava, y el mástil corto. Su utilización abarca variados ámbitos, desde rock, folk, country y ensambles experimentales."
    },
    {
        "id":"2",
        "instrumento": "Pandereta Pandero Instrumento Musical ",
        "marca": "DyM ventas",
        "modelo": "32 sonajas",
        "imagen": "nro9.jpg",
        "precio": "325",
        "costoEnvio": "150",
        "cantidadVendida": "10",
        "descripcion": "1 Pandereta - 32 sonajas metálicas. Más de 8 años vendiendo con 100 % de calificaciones POSITIVAS y clientes satisfechos !! "
    },
    {
        "id":"3",
        "instrumento": "Triangulo Musical 24 Cm Percusion",
        "marca": "LBP",
        "modelo": "24",
        "imagen": "nro8.jpg",
        "precio": "260",
        "costoEnvio": "250",
        "cantidadVendida": "3",
        "descripcion": "Triangulo Musical de 24 Centímetros De Acero. ENVIOS POR CORREO O ENCOMIENDA: Se le deberán adicionar $40 en concepto de Despacho y el Costo del envío se abonará al recibir el producto en Terminal, Sucursal OCA o Domicilio"
    },
    {
        "id":"4",
        "instrumento": "Bar Chimes Lp Cortina Musical 72 Barras ",
        "marca": "FM",
        "modelo": "LATIN",
        "imagen": "nro7.jpg",
        "precio": "2250",
        "costoEnvio": "G",
        "cantidadVendida": "2",
        "descripcion": "BARCHIME CORTINA MUSICAL DE 25 BARRAS LATIN CUSTOM. Emitimos factura A y B"
    },
    {
        "id":"5",
        "instrumento": "Shekeres. Instrumento. Música. Artesanía. ",
        "marca": "Azalea Artesanías",
        "modelo": "Cuentas de madera",
        "imagen": "nro6.jpg",
        "precio": "850",
        "costoEnvio": "300",
        "cantidadVendida": "5",
        "descripcion": "Las calabazas utilizadas para nuestras artesanías son sembradas y cosechadas por nosotros, quienes seleccionamos el mejor fruto para garantizar la calidad del producto y ofrecerle algo creativo y original."
    },
    {
        "id":"6",
        "instrumento": "Antiguo Piano Aleman Con Candelabros. ",
        "marca": "Neumeyer",
        "modelo": "Stratus",
        "imagen": "nro3.jpg",
        "precio": "17000",
        "costoEnvio": "2000",
        "cantidadVendida": "0",
        "descripcion": "Buen dia! Sale a la venta este Piano Alemán Neumeyer con candelabros incluidos. Tiene una talla muy bonita en la madera. Una pieza de calidad."
    },
    {
        "id":"7",
        "instrumento": "Guitarra Ukelele Infantil Grande 60cm",
        "marca": "GUITARRA",
        "modelo": "UKELELE",
        "imagen": "nro4.jpg",
        "precio": "500",
        "costoEnvio": "G",
        "cantidadVendida": "5",
        "descripcion": "Material: Plástico smil madera 4 Cuerdas longitud: 60cm, el mejor regalo para usted, su familia y amigos, adecuado para 3-18 años de edad"
    },
    {
        "id":"8",
        "instrumento": "Teclado Organo Electronico Musical Instrumento 54 Teclas ",
        "marca": "GADNIC",
        "modelo": "T01",
        "imagen": "nro2.jpg",
        "precio": "2250",
        "costoEnvio": "G",
        "cantidadVendida": "1375",
        "descripcion": "Organo Electrónico GADNIC T01. Display de Led. 54 Teclas. 100 Timbres / 100 Ritmos. 4 1/2 octavas. 8 Percusiones. 8 Canciones de muestra. Grabación y reproducción. Entrada para Micrófono. Salida de Audio (Auriculares / Amplificador). Vibrato. Sustain Incluye Atril Apoya partitura y Micrófono. Dimensiones: 84,5 x 32,5 x 11 cm"
    },
    {
        "id":"9",
        "instrumento": "Instrumentos De Percusión Niños Set Musical Con Estuche ",
        "marca": "KNIGHT",
        "modelo": "LB17",
        "imagen": "nro1.jpg",
        "precio": "2700",
        "costoEnvio": "300",
        "cantidadVendida": "15",
        "descripcion": "Estas viendo un excelente y completísimo set de percusion para niños con estuche rígido, equipado con los instrumentos mas divertidos! De gran calidad y sonoridad. Ideal para jardines, escuelas primarias, musicoterapeutas o chicos que se quieran iniciar en la música de la mejor manera. Es un muy buen producto que garantiza entretenimiento en cualquier casa o reunión, ya que esta equipado para que varias personas al mismo tiempo estén tocando un instrumento."
    },
    {
        "id":"10",
        "instrumento": "Batería Musical Infantil Juguete Niño 9 Piezas Palillos ",
        "marca": "Bateria",
        "modelo": "Infantil",
        "imagen": "nro5.jpg",
        "precio": "850",
        "costoEnvio": "250",
        "cantidadVendida": "380",
        "descripcion": "DESCRIPCIÓN: DE 1 A 3 AÑOS. EL SET INCLUYE 5 TAMBORES, PALILLOS Y EL PLATILLO TAL CUAL LAS FOTOS. SONIDOS REALISTAS Y FÁCIL DE MONTAR. MEDIDAS: 40X20X46 CM"
    }
];


return datos
}
*/