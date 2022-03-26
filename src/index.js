import React from "react";
import ReactDOM from "react-dom";
import './styles.css'

const App = () => {
    return (
        <div style={{margin: 'auto', width: 768, height: 255, 
        backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
            <p id="texto">Profissionais de saúde</p>
            <label className="rotulo" htmlFor="none"></label>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)