import { UsuarioProvider } from "common/context/Usuario";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>
                    <Route exact path={'/'}>
                        <Login />
                    </Route>
                    <Route exact path={'/feira'}>
                        <Feira />
                    </Route>
                </UsuarioProvider>
                <Route exact path={'/carrinho'}>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute