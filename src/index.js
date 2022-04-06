import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import img1 from './Images/foto1.jpg'

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
    //Nomes dos médicos definidos em um objeto JSON
    const nomesMedicos = {
        medico1: 'Gregor Samsa',
        medico2: 'Bluma Zeigarnik',
        medico3: 'João Silva'
    }
    return (
        //Elemento 1: Estilo definido com função que devolve objeto JSON
        <div style={estilos1}>
            <p id="texto">Profissionais de saúde</p>
            {/* Elemento 2: Estilo definido com CSS In-line */}
            <div style={{display: 'block', margin: 'auto', 
            width: '90%', height: '60%', backgroundColor: '#EEE', 
            padding: 24, border: 'solid lightgray', borderRadius: 8, 
            borderWidth: 0.1}}>
                {/* Elemento 3: Estilo definido com classe CSS definida em um arquivo à parte */}
                <div className="rotulo1">
                    {/* Primeira imagem acessada da pasta Images usando a instrução import */}
                    <img id="img" src={img1} alt="med01"></img>
                    <p style={{textAlign: 'center'}}>{nomesMedicos.medico1}</p>
                </div>
                <div className="rotulo2">
                    {/* Segunda imagem acessada usando um link https comum */}
                    <img id="img" src="https://tinyurl.com/mv5tb93s" alt="med02"></img>
                    <p style={{textAlign: 'center'}}>{nomesMedicos.medico2}</p>
                </div>
                <div className="rotulo3">
                    {/* Terceira imagem acessada da pasta public usando a propriedade env do objeto global process */}
                    <img id="img" src={process.env.PUBLIC_URL + '/foto2.jpg'} alt="Hide the pain"/>
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