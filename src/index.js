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
        <div style={estilos1}>
            <p id="texto">Profissionais de saúde</p>
            <div style={{display: 'block', margin: 'auto', 
            width: '90%', height: '60%', backgroundColor: 'lightgray', 
            padding: 24, borderRadius: 8}}>
                <div class="row">
                    <div class="col" className="rotulo1"></div>
                    <div class="col" className="rotulo2"></div>
                    <div class="col" className="rotulo3"></div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)