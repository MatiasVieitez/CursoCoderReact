import '../ItemListContainer/ItemListContainer.css'
import Item from "../Item/Item"
import { P } from '../productos';
import { useEffect, useState } from 'react';
import { reject, resolve } from 'q';
import Itemlist from '../Itemlist/Itemlist';
import { useParams } from 'react-router-dom';




const ItemListContainer = (props) => {


    const [Productos, setProductos] = useState([])
    const params = useParams();


    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {

            setTimeout(() => {

                if (params.id) {




                    const categoriaBuscada = P.filter(Productos => Productos.categoria === params.id)


                    resolve(categoriaBuscada)





                } else { resolve(P) }

            }, 2000)

        })

        promesa.then((P) => {

            setProductos(P)

        })

    }, [params.id])

    return (
        <div className="container">

            <h1 className="titulo"> Bienvenido a {props.brand}</h1>

            <Itemlist Productos={Productos} />

        </div>
    );
}

export default ItemListContainer