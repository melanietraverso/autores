document.addEventListener("DOMContentLoaded", function() {
    class CAutores {
        constructor(nombre, apellido, nacionalidad, mejorObra, añoPublicacion, edadEnPublicacion) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.nacionalidad = nacionalidad;
            this.mejorObra = mejorObra;
            this.añoPublicacion = añoPublicacion;
            this.edadEnPublicacion = edadEnPublicacion;
        }
    }

    const autores = [
        new CAutores("Gabriel", "García Márquez", "Colombiano", "Cien años de soledad", 1967, 40),
        new CAutores("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48),
        new CAutores("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40),
        new CAutores("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45),
        new CAutores("Clarice", "Lispector", "Brasileña", "La hora de la estrella", 1977, 56),
        new CAutores("Juan", "Rulfo", "Mexicano", "Pedro Páramo", 1955, 38),
        new CAutores("Carlos", "Fuentes", "Mexicano", "La región más transparente", 1958, 29),
        new CAutores("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de América Latina", 1971, 31)
    ];

    const autoresDiv = document.getElementById("autores");
    const resultadosDiv = document.getElementById("resultados");

    function mostrarAutores(autores) {
        autoresDiv.innerHTML = "";
        autores.forEach(autor => {
            const listItem = document.createElement("li");
            listItem.textContent = `${autor.nombre} ${autor.apellido} - ${autor.mejorObra} (${autor.añoPublicacion})`;
            autoresDiv.appendChild(listItem);
        });
    }

    function mostrarResultados(autores, titulo) {
        resultadosDiv.innerHTML = `<h2>${titulo}</h2>`;
        const list = document.createElement("ul");
        autores.forEach(autor => {
            const listItem = document.createElement("li");
            listItem.textContent = `${autor.nombre} ${autor.apellido} - ${autor.mejorObra} (${autor.añoPublicacion})`;
            list.appendChild(listItem);
        });
        resultadosDiv.appendChild(list);
    }

    function mostrarPromedioEdad() {
        const totalEdad = autores.reduce((sum, autor) => sum + autor.edadEnPublicacion, 0);
        const promedio = (totalEdad / autores.length).toFixed(2);
        resultadosDiv.innerHTML = `<h2>Promedio de la edad de publicación</h2><p>${promedio}</p>`;
    }

    window.mostrarAutoresArgentinos = function() {
        const autoresArgentinos = autores.filter(autor => autor.nacionalidad === "Argentino");
        mostrarResultados(autoresArgentinos, "Autores Argentinos");
    };

    window.mostrarAutores1960a1980 = function() {
        const autores1960a1980 = autores.filter(autor => autor.añoPublicacion >= 1960 && autor.añoPublicacion <= 1980);
        mostrarResultados(autores1960a1980, "Autores que publicaron entre 1960 y 1980");
    };

    window.mostrarPromedioEdad = mostrarPromedioEdad;

    window.mostrarTodosAutores = function() {
        mostrarAutores(autores);
    };

    
    mostrarAutores(autores);
});
