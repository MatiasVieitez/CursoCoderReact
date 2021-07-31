import ItemCounter from "../Counter/ItemCounter.js";



const Item = ({ id, title, price, pictureUrl, stock }) => {

    function onAdd(counter) {

        let item = {

            item: {

                id: id,
                title: title,
                price: price,
                pictureUrl: pictureUrl,
            },

            cantidad: counter,

        };

    }


    return (

        <>

            <ItemCounter stock={stock} initial={1} onAdd={onAdd} />

        </>

    );



};

export default Item;