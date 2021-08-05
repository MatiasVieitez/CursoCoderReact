//importamos react
import React from "react"
//importamos reactdom
import reactDom from "react-dom";

import App from "./App.js"



//creamos el componente App, siempre funcion y con PascalCase
//const App = () => "hola mundo"


//renderizamos la aplicacion
reactDom.render(< App />, document.getElementById('root'));