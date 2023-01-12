import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {

    const [ carrinho, setCarrinho ] = useState([])

    return(
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            { children }
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    const mudarQuantidade = (id, quantidade) => {
        setCarrinho(carrinhoAntigo => carrinhoAntigo.map(itemDoCarrinho => {
            if(itemDoCarrinho.id === id){
                itemDoCarrinho.unidade += quantidade
            }
            return itemDoCarrinho
        }))
        
    }

    const adicionarItem = (novoProduto) => {
        const produto = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id);
    
        if(!produto){
          novoProduto.unidade = 1;
          return(
            setCarrinho([...carrinho, novoProduto])
            )
        }
        
        mudarQuantidade(novoProduto.id, 1)    
    }

    const removerItem = (id) => {
        const produto = carrinho.find(itemCarrinho => itemCarrinho.id === id);
        const ultimoItem = produto?.unidade === 1;
        if(ultimoItem){
            setCarrinho(carrinho.filter(itemDoCarrinho => itemDoCarrinho.id !== id))
            return
        }

        mudarQuantidade(id, -1)
        
    }   

    return{
        carrinho,
        setCarrinho,
        adicionarItem,
        removerItem
    }
}