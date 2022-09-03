---SOLO PROJECT (HENRY)---

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.

Versiones:

- **react**: 17.0.1
- **react-dom**: 17.0.1
- **react-router-dom**: 5.2.0
- **redux**: 4.0.5
- **react-redux**: 7.2.3

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

La idea general fue crear una aplicación en la cual se puedan ver los distintos Pokemon utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

- Buscar pokemons
- Filtrarlos / Ordenarlos
- Crear nuevos pokemons

### Únicos Endpoints/Flags

- GET <https://pokeapi.co/api/v2/pokemon>
- GET <https://pokeapi.co/api/v2/pokemon/{id}>
- GET <https://pokeapi.co/api/v2/pokemon/{name}>
- GET <https://pokeapi.co/api/v2/type>

\_

#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

## Frontend

Se desarrollo una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

**Pagina inicial**:

- [ ] imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

**Ruta principal**:

- [ ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
- [ ] Área donde se verá el listado de pokemons. Al iniciar cargara los primeros resultados obtenidos desde la ruta `GET /pokemons` y muestra su:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
- [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por ataque
- [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.

**Ruta de detalle de Pokemon**:

- [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- [ ] Número de Pokemon (id)
- [ ] Estadísticas (vida, ataque, defensa, velocidad)
- [ ] Altura y peso

**Ruta de creación**:

- [ ] Un formulario **controlado con JavaScript** con los campos mencionados en el detalle del Pokemon
- [ ] Posibilidad de seleccionar/agregar más de un tipo de Pokemon
- [ ] Botón/Opción para crear un nuevo Pokemon

## Base de datos

- [ ] Pokemon con las siguientes propiedades:
  - ID (Número de Pokemon) \* :
  - Nombre \*
  - Vida
  - Ataque
  - Defensa
  - Velocidad
  - Altura
  - Peso
- [ ] Tipo con las siguientes propiedades:
  - ID
  - Nombre

## Backend

Se desarrollo un servidor en Node/Express con las siguientes rutas:

- [ ] **GET /pokemons**:
  - listado de los pokemons desde pokeapi.
  - devuelve solo los datos necesarios para la ruta principal
- [ ] **GET /pokemons/{idPokemon}**:
  - Obtiene el detalle de un pokemon en particular
  - trae los datos pedidos en la ruta de detalle de pokemon
  -
- [ ] **GET /pokemons?name="..."**:
  - Obtiene el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
  -
- [ ] **POST /pokemons**:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  -
- [ ] **GET /types**:
  - Obtiene todos los tipos de pokemons posibles
