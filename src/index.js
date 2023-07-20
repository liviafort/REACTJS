import React from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'

function Componente1() {
    //Se deixar a div do React.Fragment vazio também irá funcionar
    return (
        <React.Fragment>
            <div className='algumValor'>
                <h1>Meu primeiro componente</h1>
                <ul>
                    <li>
                        <a href='#'>Componente 1</a>
                    </li>
                </ul>
            </div>
            <h2>Fim dos componentes</h2>
            <span>Adicione um novo componente</span><br></br>
            <input type='text' placeholder='Novo componente'></input>
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

const Pessoa = () => <h2>Lívia Maria</h2>;
const Mensagem = () => {
    return <p>Essa é a minha mensagem</p>
}

const Componente3 = () => {
    return (
        <div>
            <Pessoa />
            <Mensagem />
        </div>
    )
}

const Booklist = () => {
    return (
        <section className='booklist'>
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
}

const Book = () => {
    return (
        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>
    )
}

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/81iqH8dpjuL._AC_UL600_SR600,400_.jpg'/>
const Title = () => <h2>A Biblioteca da Meia-Noite</h2>
const Author = () => {
    return <h4>Matt Haig</h4>
}


//A renderização do componente acontece pelo ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);