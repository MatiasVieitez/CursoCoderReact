import '../ItemListContainer/ItemListContainer.css'
import { useEffect, useState } from 'react';
import { reject, resolve } from 'q';
import Itemlist from '../Itemlist/Itemlist';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';




const ItemListContainer = (props) => {


    const [Productos, setProductos] = useState([])
    const { id } = useParams()


    useEffect(() => {

        let collection = firestore.collection('Productos')

        if (typeof id !== 'undefined') {
            collection = collection.where('categoria', '==', id)
        }

        collection.limit(20)
            .get()
            .then(querySnapshot => {
                setProductos(querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }))
            }).catch(() => setProductos([]))

    }, [id])

    return (
        <div className="container">

            <h1 className="titulo-props"> Bienvenido a {props.brand}</h1>

            <Itemlist Productos={Productos} />

        </div>
    );
}

export default ItemListContainer