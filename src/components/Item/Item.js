import ItemCounter from "../Counter/ItemCounter.js";
import './Item.css'

//id: 1, title: 'Monito', price: 670, pictureUrl: Mono, stock: 20

const Item = ({ id, title, price, pictureUrl, stock }) => {

    function onAdd(counter) {



    }


    return (

        <>
            <section className="productos">

                <div className="contenedor">
                    <h3>{title}</h3>
                    <h4>${price}</h4>

                    <img src={pictureUrl} alt="" className="logos" />
                </div>

                <ItemCounter stock={10} initial={1} onAdd={onAdd} className="contadores" />
            </section>

        </>

    );



};

export default Item;