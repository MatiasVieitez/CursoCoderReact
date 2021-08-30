import { useState } from "react";

const Order = ({ OnSubmit, LastOrder, isLoading }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


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


    return (

        <div>

            <h2> Finaliza tu compra </h2>
            <form onSubmit={(e) => OnSubmit(e, { name: name, phone: phone, email: email })}>'

                <div className="mb-6">
                    <div className="mb-2">
                        <label className="block text-gray-300">Nombre</label>
                        <input type="text" name="name" onChange={inputHandler}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-300">Telefono</label>
                        <input type="text" name="phone" onChange={inputHandler}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-300">Email</label>
                        <input type="email" name="email" onChange={inputHandler}
                        />
                    </div>

                    {LastOrder &&
                        <p className="mt-2 text-center">
                            Confirmamos tu compra con el siguiente Nro de orden:
                            <code >
                                {LastOrder}
                            </code>
                        </p>}
                </div>

                {!isLoading &&
                    <button className="bg-green-600 hover:bg-green-500 active:bg-green-700 rounded px-3 py-1"
                        type="submit">Finalizar compra</button>
                }

                {isLoading &&
                    <button className="bg-yellow-400 active:bg-green-500 rounded px-3 py-1"
                        type="button" disabled>
                        <span className="loader"></span>
                    </button>
                }

            </form>


        </div>

    )
}

export default Order