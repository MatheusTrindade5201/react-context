import { CarrinhoProvider } from "common/context/Carrinho";
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
                    <Route path={'/feira'}>
                        <CarrinhoProvider>
                            <Feira />   
                        </CarrinhoProvider>
                    </Route>
                <Route path={'/carrinho'}>
                    <Carrinho />
                </Route>
                </UsuarioProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute