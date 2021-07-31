import "./ItemCounter.css"
import { useState } from "react";

const ItemCounter = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial);

    const increaseCounter = () => {

        if (counter < stock) { setCounter(counter + 1) }
        else { }
    }

    const DecreaseCounter = () => {

        if (counter <= 1) {

        } else { setCounter(counter - 1) }

    }


    return (


        <div className="contador">
            <h3>Amigurumi Osito</h3>

            <p className="numero">  Cantidad : {counter}</p>

            <div className="btns">
                <button onClick={DecreaseCounter} className="boton">

                    -

                </button>

                <button onClick={onAdd(counter)} className="botonAdd">

                    Agregar al carrito

                </button>


                <button onClick={increaseCounter} className="boton">

                    +

                </button>



            </div>

        </div>



    )


}

export default ItemCounter;