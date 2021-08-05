import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import elefante from "../img/elefante.png"


const ItemDetailContainer = () => {

  const prod = { id: 4, title: "Pato", price: 500, PictureUrl: elefante }

  const [item, setItem] = useState(false)





  useEffect(() => {


    const promesa = getItems()
    promesa.then(json => {

      setItem(json)
    })



  }, [])



  const getItems = () => {

    const promesa = new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(prod)

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
