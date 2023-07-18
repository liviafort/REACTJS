import React from 'react'
import ReactDOM  from 'react-dom/client'

function PrimeiroComponente() {
    return <h1>Meu primeiro componente</h1>
}

//A renderização do componente acontece pelo ReactDOM

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<PrimeiroComponente />);