import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import NavBar from "./components/Navbar/Navbar.js"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"
import { Fragment } from "react"


const App = () => {



    return (
        <>
            <Fragment>

                <BrowserRouter>
                    <NavBar />
                    <Switch >

                        <Route path="/">
                            <ItemListContainer brand="CreativaKids" />
                        </Route>

                        <Route path="/category/:id">

                            <ItemListContainer />

                        </Route>

                        <Route path="/item/:id">

                            <ItemDetailContainer />

                        </Route>


                    </Switch>
                </BrowserRouter>
            </Fragment>

        </>
    )
}

export default App