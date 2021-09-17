import { useState } from "react";
import { firestore, getTimestamp } from '../firebase'
import './order.css'

const Order = ({ OnSubmit, isLoading }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [lastOrder, setLastOrder] = useState()
    let compro = false;

    const inputHandler = (e) => {

        switch (e.target.name) {

            case 'name':
                setName(e.target.value)
                break;
            case 'phone':
                setPhone(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            default:
                break;
        }
    }

    const crearOrdenDeCompra = (e) => {
        if (compro === false) {
            e.preventDefault()
            const newOrder = firestore.collection('Orders');
            const newOrdenDeCompra = {
                nombre: name,
                telefono: phone,
                Email: email,
                fecha: getTimestamp()
            }
            newOrder.add(newOrdenDeCompra).then(({ id }) => {
                setLastOrder(id)
            });
        } else {
            return (
                <p className="mt-2 text-center">

                    La compra ya fue realizada

                </p>
            )
        }
    }

    return (

        <div>

            <form onSubmit={crearOrdenDeCompra} className="Formulario">

                <h2 className="formTitle"> Finaliza tu compra </h2>
                <div className="">
                    <div className="">
                        <label className="formLabel">Nombre</label>
                        <input type="text" name="name" className="formInput" required onChange={inputHandler}
                        />
                    </div>

                    <div className="">
                        <label className="formLabel">Telefono</label>
                        <input type="text" name="phone" className="formInput" required onChange={inputHandler}
                        />
                    </div>

                    <div className="">
                        <label className="formLabel">Email</label>
                        <input type="email" name="email" className="formInput" required onChange={inputHandler}
                        />
                    </div>

                    {lastOrder &&
                        <p className="mt-2 text-center">
                            Confirmamos tu compra con el siguiente Nro de orden:
                            <code >
                                {lastOrder}
                                {compro = true}
                            </code>
                        </p>}
                </div>

                {!isLoading &&
                    <button className="formSubmit"
                        type="submit">Finalizar compra</button>
                }

                {isLoading &&
                    <button className="formSubmit"
                        type="button" disabled>
                        <span className="loader"></span>
                    </button>
                }

            </form>

        </div>
    )
}

export default Order