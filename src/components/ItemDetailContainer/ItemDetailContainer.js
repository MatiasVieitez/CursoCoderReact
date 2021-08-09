import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import elefante from "../img/elefante.png"
import { P } from "../productos"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  //const prod = { id: 4, title: "Elefante", price: 500, PictureUrl: elefante }

  const [item, setItem] = useState(false)

  const { id } = useParams();

  useEffect(() => {


    const promesa = getItems()
    promesa.then(json => {

      setItem(json)
    })



  }, [id])

  const getItems = () => {

    const promesa = new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(P)

      }, 2000)
    })
    return promesa
  }

  return (

    <div>


      <ItemDetail item={item} />

    </div>

  );
}

export default ItemDetailContainer
