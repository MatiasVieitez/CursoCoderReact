import '../ItemListContainer/ItemListContainer.css'
import Item from "../Item/Item"
import { P } from '../productos';
import { useEffect, useState } from 'react';
import { reject, resolve } from 'q';
import Itemlist from '../Itemlist/Itemlist';




const ItemListContainer = (props) => {


    const [Productos, setProductos] = useState([])




    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {


            setTimeout(() => {

                resolve(P)

            }, 2000)

        })

        promesa.then((P) => {

            setProductos(P)

        })

    }, [])

    return (
        <div className="container">

            <h1 className="titulo"> Bienvenido a {props.brand}</h1>

            <Itemlist Productos={Productos} />

        </div>
    );
}

export default ItemListContainer