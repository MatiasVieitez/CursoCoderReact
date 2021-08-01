import Item from "../Item/Item"

const Itemlist = ({ Productos }) => {



    return (

        <ul>

            {Productos.map(Productos => {

                return <Item Productos={Productos} />
            })}



        </ul>


    )

}

export default Itemlist