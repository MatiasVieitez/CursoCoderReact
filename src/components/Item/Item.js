import ItemCounter from "../Counter/ItemCounter.js";



const Item = ({ Producto }) => {




    function onAdd(counter) {



    }


    return (

        <>

            <ItemCounter stock={10} initial={1} onAdd={onAdd} />

        </>

    );



};

export default Item;