fetch('https://zelda.fanapis.com/api/games?limit=25')
.then(response => response.json())
.then(data => {
    console.log(data);

    juegos = data.data;

    console.log(juegos[0]);

    mostrarJuegos(juegos);
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