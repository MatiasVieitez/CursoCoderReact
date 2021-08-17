import Item from "../Item/Item"
import "./itemlist.css"

const Itemlist = ({ Productos }) => {

    return (

        <ul className="Productos-list">

            {Productos.map(Productos => {

                return <Item key={Productos.id} {...Productos} />
            })}




        </ul>
    )
}

export default Itemlist