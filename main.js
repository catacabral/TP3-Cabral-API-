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

    juegosContainer.innerHTML +=  ` <article class="card">
    
    <img src="imagenes/juegos/Legend_of_zelda.jpg" alt="The Legend of Zelda">
    <h2>${juegos.name}</h2>
    <p>${juegos.description}</p>
    <p>Desarrollador: ${juegos.developer}</p>
    <p>Publicado por: ${juegos.publisher}</p>
    <p>Fecha: ${juegos.released_date}</p>
    
    </article>
    `;

    })
}