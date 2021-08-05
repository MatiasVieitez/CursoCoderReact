import ItemCounter from "../Counter/ItemCounter.js";

const ItemDetail = ({ item }) => {

    const onAdd = () => {

        console.log('agregando a carrito')

    }

    return (
        <>


            <section className="productos">

                <div className="contenedor">
                    <h3>{item.title}</h3>
                    <h4>${item.price}</h4>

                    <img src={item.PictureUrl} alt="" className="logos" />
                </div>

                <ItemCounter stock={10} initial={1} onAdd={onAdd} className="contadores" />
            </section>

        </>
    )
}

export default ItemDetail