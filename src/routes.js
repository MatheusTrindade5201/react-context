import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <Login />
                </Route>
                <Route exact path={'/feira'}>
                    <Feira />
                </Route>
                <Route exact path={'/carrinho'}>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute