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
    const nomesMedicos = {
        medico1: 'Gregor Samsa',
        medico2: 'Maria Feodorovna',
        medico3: 'aaa'
    }
    return (
        //elemento 1
        <div style={estilos1}>
            <p id="texto">Profissionais de saúde</p>
            <div style={{display: 'block', margin: 'auto', 
            width: '90%', height: '60%', backgroundColor: '#EEE', 
            padding: 24, border: 'solid lightgray', borderRadius: 8, 
            borderWidth: 0.1}}>
                <div className="rotulo1">

                    <p style={{textAlign: 'center'}}>{nomesMedicos.medico1}</p>
                </div>
                <div className="rotulo2">
                    <img id="img3" src="https://tinyurl.com/mv5tb93s" alt="quem é ela?"></img>
                    <p style={{textAlign: 'center'}}>{nomesMedicos.medico2}</p>
                </div>
                <div className="rotulo3">

                    <p style={{textAlign: 'center'}}>{nomesMedicos.medico3}</p>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)