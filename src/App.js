import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import NavBar from "./components/Navbar/Navbar.js"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"

const App = () => {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Switch >

                    <Route path="/" exact>
                        <ItemListContainer brand="CreativaKids" />
                    </Route>

                    <Route path="/categoria/:id">

                        <ItemListContainer />

                    </Route>

                    <Route path="/item/:id">

                        <ItemDetailContainer />

                    </Route>


                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App