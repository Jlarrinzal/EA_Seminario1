// Ejercicio con map, filter y reduce
fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(json => {
            const ids = json.map((prueba) => prueba.id);
            console.log(ids);
            const completed = json.filter((complete) => complete.title === "delectus aut autem");
            console.log(completed);
            const result = json.reduce((titulos, persona) => { 
                  return titulos + persona.title + ', ';
              }, '');
              const resultadoFinal = result.slice(0, -2);
              console.log(resultadoFinal);
            });


            // Prueba de de la API
            fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => console.log(json))          



      
