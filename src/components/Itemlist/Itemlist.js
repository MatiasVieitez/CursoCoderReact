import Item from "../Item/Item"

const Itemlist = ({ Productos }) => {

    return (

        <ul>

            {Productos.map(Productos => {

                return <Item key={Productos.id} {...Productos} />
            })}




        </ul>
    )
}

export default Itemlist