import React from "react";
import ReactDOM from "react-dom";
import './styles.css'

const App = () => {
    const estilos1 = {
        margin: 'auto',
        width: 768,
        height: 255,
        backgroundColor: '#EEE',
        padding: 12,
        borderRadius: 8
    }
    return (
        //elemento 1
        <div style={estilos1}>
            <p id="texto">Profissionais de saúde</p>
            <div style={{display: 'block', margin: 'auto', 
            width: '90%', height: '60%', backgroundColor: 'lightgray', 
            padding: 24, borderRadius: 8}}>
                <div className="rotulo1"></div>
                <div className="rotulo2"></div>
                <div className="rotulo3"></div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)