import React, { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        console.log( contador + "Incrementar clicado");
        setContador(contador + 1);
    };

    const decrementar = () => {
        console.log(contador + "Decrementar clicado");
        setContador(contador - 1);
    };

    return (
        <div>
            <h2>Contador</h2>
            <p>Valor:{contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

export default Contador;
