import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import elefante from "../img/elefante.png"
import { P } from "../productos"
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";


const ItemDetailContainer = () => {

  //const prod = { id: 4, title: "Elefante", price: 500, PictureUrl: elefante }

  const [item, setItem] = useState({})

  const { id } = useParams();

  useEffect(() => {
    firestore.collection('Productos').doc(id).get()
      .then(querySnapshot => {
        setItem({ id: id, ...querySnapshot.data() })
      })
      .catch(() => setItem({}))
  }, [id])

  return (

    <div>

      <ItemDetail item={item} />

    </div>

  );
}

export default ItemDetailContainer
