import React, { Dispatch, SetStateAction, useState } from "react";

type CepContextType = {
    cidade: string
    setCidade: Dispatch<React.SetStateAction<string>> 
    estado: string
    setEstado: Dispatch<SetStateAction<string>>
    bairro: string
    setBairro: Dispatch<React.SetStateAction<string>> 
    logradouro: string
    setLogradouro: Dispatch<SetStateAction<string>>
}

export const CepContext = React.createContext({} as CepContextType)

export const CepContextProvider = (props: React.PropsWithChildren ) => {
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [bairro, setBairro] = useState("")
    const [logradouro, setLogradouro] = useState("")

    return<>
    <CepContext.Provider value={{setCidade, setEstado, setBairro, setLogradouro, cidade, estado, bairro, logradouro}}>
        {props.children}
    </CepContext.Provider>
    </>

}