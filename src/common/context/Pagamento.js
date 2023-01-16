import { createContext, useContext, useState } from "react";

export const PagamentoContex = createContext();

export const PagamentoProvider = ({children}) => {

    const tiposPagamento = [
        {
            nome: "Boleto Bancario",
            juros: 1,
            id: 1
        },
        {
            nome: "Cartão de crédito",
            juros: 1.3,
            id: 2
        },
        {
            nome: "PIX",
            juros: 1,
            id: 3
        },
        {
            nome: "Crediario",
            juros: 1.5,
            id: 4
        }
    ]

    const [ formaDePagamento, setFormaDePagamento ] = useState(tiposPagamento[0])

    return(
        <PagamentoContex.Provider value={{tiposPagamento, formaDePagamento, setFormaDePagamento}}>
            { children }
        </PagamentoContex.Provider>
    )
}

export const usePagamentoContext = () => {
    const { formaDePagamento, setFormaDePagamento, tiposPagamento } = useContext(PagamentoContex);

    const mudaPagamento = (id) => {
        const pagamentoAtual = tiposPagamento.find(pagamento => pagamento.id === id)
        console.log(pagamentoAtual);

/*         setFormaDePagamento(pagamentoAtual)
 */    }

    return{
        formaDePagamento,
        mudaPagamento,
        tiposPagamento
    }
}