import "./ItemCounter.css"
import { useState } from "react";


const ItemCounter = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial);

    const increaseCounter = () => {

        if (counter < stock) { setCounter(counter + 1) }
    }

    const DecreaseCounter = () => {

        if (counter <= 1) {

        } else { setCounter(counter - 1) }

    }



    return (

        <>

            <section className="contadores">

                <div className="contador">


                    <p className="numero">  Cantidad : {counter}</p>

                    <div className="btns">
                        <button onClick={DecreaseCounter} className="boton">

                            -

                        </button>

                        <button onClick={() => onAdd(counter)} className="botonAdd">

                            Agregar al carrito

                        </button>


                        <button onClick={increaseCounter} className="boton">

                            +

                        </button>



                    </div>

                </div>

            </section>


        </>


    )


}

export default ItemCounter;