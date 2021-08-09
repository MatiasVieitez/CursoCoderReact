import ItemCounter from "../Counter/ItemCounter.js";

const ItemDetail = ({ title, price, PictureUrl, descripcion }) => {

    const onAdd = () => {

        console.log('agregando a carrito')

    }

    return (
        <>


            <section className="productos">

                <div className="contenedor">
                    <h3>{title}</h3>
                    <h4>${price}</h4>
                    <p>{descripcion}</p>


                    <img src={PictureUrl} alt="" className="logos" />
                </div>

                <ItemCounter stock={10} initial={1} onAdd={onAdd} className="contadores" />
            </section>

        </>
    )
}

export default ItemDetail