import InputCep from "../componentes/InputCep";
import InputCidades from "../componentes/InputCidades";
import InputEstados from "../componentes/InputEstados";
import { CepContextProvider } from "../providers/CepContext";

export default function() {

    return <>
        <h1>Dados de Endereço</h1>
        <div className="container">
            <CepContextProvider>
                <InputCep/>
                <InputEstados />
                <InputCidades />
            </CepContextProvider>
        </div>
    </>
}