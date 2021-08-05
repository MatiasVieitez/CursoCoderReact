import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import NavBar from "./components/Navbar/Navbar.js"
import { BrowserRouter } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"


const App = () => {



    return (
        <>
            <NavBar />
            <ItemListContainer brand="CreativaKids" />
            <ItemDetailContainer />

        </>
    )
}

export default App