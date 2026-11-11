fetch('https://zelda.fanapis.com/api/games')
.then(response => response.json())
.then(data => {
    console.log(data);

    juegos = data.data;

    console.log(juegos);
})

.catch(error => {
    console.error('Error al obtener los juegos;',error);
})