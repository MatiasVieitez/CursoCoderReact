import Item from "../Item/Item"

const Itemlist = ({ Productos }) => {



    return (

        <ul>

            {Productos.map(Productos => {

                return <Item id={Productos.id} title={Productos.title} price={Productos.price} pictureUrl={Productos.pictureUrl} />
            })}



        </ul>


    )

}

export default Itemlist