import React from 'react'
import ReactDOM  from 'react-dom/client'

function Componente1() {
    return (
        <div>
            <h1>Meu primeiro componente</h1>
        </div>
    );
}


const Componente2 = () => {
    return React.createElement('div',
    {}, 
    React.createElement('h2', {}, 'olá mundo'));
}


//A renderização do componente acontece pelo ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Componente2 />);