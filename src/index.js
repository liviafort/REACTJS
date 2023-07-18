import React from 'react'
import ReactDOM  from 'react-dom/client'

function Componente1() {
    return (
        <React.Fragment>
            <div>
                <h1>Meu primeiro componente</h1>
                <ul>
                    <li>
                        <a href='#'>Componente 1</a>
                    </li>
                </ul>
            </div>
            <h2>Fim dos componentes</h2>
        </React.Fragment>
    );
}


const Componente2 = () => {
    return React.createElement('div',
    {}, 
    React.createElement('h2',
     {},
     'olá mundo'), React.createElement('ul', 
     {},
     React.createElement('li',
     {},
     React.createElement('a',
     {},
     'Componente 1'))
     ));
}


//A renderização do componente acontece pelo ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Componente2 />);