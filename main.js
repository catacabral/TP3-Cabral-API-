fetch('https://zelda.fanapis.com/api/games')
.then(response => response.json())
.then(data => {
    console.log(data);

    juegos = data.data;

    console.log(juegos);

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
    
    <h2>${juegos.name}</h2>
    <p>${juegos.description}</p>
    <p>Desarrollador: ${juegos.developer}</p>
    <p>Publicado por: ${juegos.publisher}</p>
    <p>Fecha: ${juegos.released_date}</p>
    
    </article>
    `;

    })
}