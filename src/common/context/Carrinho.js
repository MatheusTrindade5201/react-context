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

    const adicionarItem = (novoProduto) => {
        const produto = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id);
    
        if(!produto){
          novoProduto.unidade = 1;
          return(
            setCarrinho([...carrinho, novoProduto])
            )
        }
        
        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDoCarrinho => {
          if(itemDoCarrinho.id === novoProduto.id){
            itemDoCarrinho.unidade += 1
          }
          return itemDoCarrinho
        }))     
    }

    const removerItem = (id) => {
        const produto = carrinho.find(itemCarrinho => itemCarrinho.id === id);
        const ultimoItem = produto?.unidade === 1;
        if(ultimoItem){
            setCarrinho(carrinho.filter(itemDoCarrinho => itemDoCarrinho.id !== id))
            return
        }
        setCarrinho(carrinhoAntigo => carrinhoAntigo.map(itemDoCarrinho => {
            if(itemDoCarrinho.id === id){
                itemDoCarrinho.unidade -= 1
            }
            return itemDoCarrinho
        }))
    }   

    return{
        carrinho,
        setCarrinho,
        adicionarItem,
        removerItem
    }
}