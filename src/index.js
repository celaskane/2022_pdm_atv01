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
        border: 'solid darkgray',
        borderRadius: 8,
        borderWidth: 0.5
    }
    return (
        //elemento 1
        <div style={estilos1}>
            <p id="texto">Profissionais de saúde</p>
            <div style={{display: 'block', margin: 'auto', 
            width: '90%', height: '60%', backgroundColor: '#EEE', 
            padding: 24, border: 'solid lightgray', borderRadius: 8, 
            borderWidth: 0.1}}>
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