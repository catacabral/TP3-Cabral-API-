fetch('https://zelda.fanapis.com/api/games?limit=25')
.then(response => response.json())
.then(data => {
    console.log(data);

    juegos = data.data;

    console.log(juegos[0]);

    mostrarJuegos(juegos);
    actualizarFiltro();
})

.catch(error => {
    console.error('Error al obtener los juegos;',error);
});

let juegos = [];

const juegosContainer = document.getElementById("juegosContainer");

function mostrarJuegos(lista){

    juegosContainer.innerHTML="";

    lista.forEach(juegos =>{
    
    let imagen = "imagenes/juegos/no image.jpg";

    if(juegos.name === "The Legend of Zelda"){
        imagen =  "imagenes/juegos/Legend_of_zelda.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: A Link to the Past"){
        imagen =  "imagenes/juegos/A link to the past.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Ocarina of Time"){
        imagen =  "imagenes/juegos/OOT.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Oracle of Ages"){
        imagen =  "imagenes/juegos/Oracle of Ages.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Link's Awakening DX"){
        imagen =  "imagenes/juegos/link's awakening DX.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Majora's Mask"){
        imagen =  "imagenes/juegos/Majora's_Mask.jpg";
    }

    else if(juegos.name === "Zelda II: The Adventure of Link"){
        imagen =  "imagenes/juegos/The Adventure of Link.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: The Wind Waker"){
        imagen =  "imagenes/juegos/WW.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Twilight Princess"){
        imagen =  "imagenes/juegos/TP.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Oracle of Seasons"){
        imagen =  "imagenes/juegos/Oracle of seasons.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Spirit Tracks"){
        imagen =  "imagenes/juegos/SP.jpg";
    }

    else if(juegos.name === "BS The Legend of Zelda: Ancient Stone Tablets"){
        imagen =  "imagenes/juegos/Ancient stone Tablets.jpg";
    }

    else if(juegos.name === "Hyrule Warriors"){
        imagen =  "imagenes/juegos/Hyrule warriors.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Four Swords Adventures"){
        imagen =  "imagenes/juegos/Four Swords Adventure.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Tri Force Heroes"){
        imagen =  "imagenes/juegos/Tri force heroes.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Breath of the Wild"){
        imagen =  "imagenes/juegos/BOTW.jpg";
    }

    else if(juegos.name === "Zelda: The Wand of Gamelon"){
        imagen =  "imagenes/juegos/wand of gamelon.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Four Swords"){
        imagen =  "imagenes/juegos/four swords.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: The Minish Cap"){
        imagen =  "imagenes/juegos/Minish cap.png";
    }

    else if(juegos.name === "The Legend of Zelda: Four Swords Anniversary Edition"){
        imagen =  "imagenes/juegos/FW  AE.jpg";
    }

    else if(juegos.name === "Hyrule Warriors: Age of Calamity"){
        imagen =  "imagenes/juegos/Age of calamity.jpg";
    }

    else if(juegos.name === "Link: The Faces of Evil"){
        imagen =  "imagenes/juegos/Faces of evil.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Phantom Hourglass"){
        imagen =  "imagenes/juegos/Phantom Hourglass.jpg";
    }

    else if(juegos.name === "The Legend of Zelda: Link's Awakening"){
        imagen =  "imagenes/juegos/Link's_Awakening.png";
    }
    



    juegosContainer.innerHTML +=  ` <article class="card">
    
    <img src="${imagen}" alt="${juegos.name}" class="imagen">
    <h2>${juegos.name}</h2>
    <p>${juegos.description}</p>
    <p>Desarrollador: ${juegos.developer}</p>
    <p>Publicado por: ${juegos.publisher}</p>
    <p>Fecha: ${juegos.released_date}</p>
    
    </article>
    `;

    })
}

const buscador = document.getElementById("buscador")

buscador.addEventListener("input", buscar)

function buscar(){
    
    const texto = buscador.value.toLowerCase()

    const juegosFiltrados = juegos.filter(juegos => {
        return juegos.name.toLowerCase().includes(texto)
    })

    mostrarJuegos(juegosFiltrados)
}

const filtroDesarrollador = document.getElementById("filtroDesarrollador")

filtroDesarrollador.addEventListener("change", filtrar)

function filtrar(){
    const juegosFiltrados = juegos.filter( juegos =>{
        return juegos.developer.includes(filtroDesarrollador.value)
    })

    mostrarJuegos(juegosFiltrados)
}

function actualizarFiltro(){
    let desarrolladores = [];

    juegos.forEach(juegos => {
        if(!desarrolladores.includes(juegos.developer)){
            desarrolladores.push(juegos.developer)
        }
    })

    desarrolladores.forEach(desarrollador =>{
        filtroDesarrollador.innerHTML += `<option value="${desarrollador}">${desarrollador}</option>`
    })
}