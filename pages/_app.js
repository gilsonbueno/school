import React, { useEffect, useState } from 'react';
import '../styles/globals.scss'

function Home() {
  return (
    <div className='container'>
      <p className='title'>Gibis Turma da Monica</p>
      <List />
    </div>
  )
}

function List() {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const listOfBooks = [
      {
        id: '1',
        name: 'Monica Como se Faz uma historia de terror 48',
        edition: 48,
        image: '/images/Imagem01.jpg'
      },
      {
        id: '2',
        name: 'Almanaque da Monica 04, corte cabelo, cortando cebolinha, salao',
        edition: 4,
        image: '/images/Imagem02.jpg'
      },
      {
        id: '3',
        name: 'Almanaque da Cascao 2019 79, porco, banho',
        edition: 79,
        image: '/images/Imagem03.jpg'
      },
      {
        id: '4',
        name: 'Monica como fazer amigos e enfeitiçar pessoas 6 sorrindo',
        edition: 6,
        image: '/images/Imagem04.jpg'
      },
      {
        id: '5',
        name: 'Monica O misterioso caso do vaso milenario 69 detetive assustado',
        edition: 69,
        image: '/images/Imagem05.jpg'
      },
      {
        id: '6',
        name: 'Almanaque da Monica 03, borboleta, fadas, asas, azul, magali, melancia',
        edition: 3,
        image: '/images/Imagem06.jpg'
      },
      {
        id: '7',
        name: 'Monica Essa musica é minha 70',
        edition: 70,
        image: '/images/Imagem07.jpg'
      },
      {
        id: '8',
        name: 'Almanaque da Monica dormindo cama sonho cebolinha coelho',
        edition: 0,
        image: '/images/Imagem08.jpg'
      },
      {
        id: '9',
        name: 'Almanaque da turma da Monica 01, chegamos',
        edition: 9,
        image: '/images/Imagem09.jpg'
      },
      {
        id: '10',
        name: 'Monica 2 A casa de pelucia, papel, vermelho, interrogacao',
        edition: 2,
        image: '/images/Imagem10.jpg'
      },
      {
        id: '11',
        name: 'Cascao 7, O misterio da irma monstrenga, assustado cebolinha, abc, dado',
        edition: 7,
        image: '/images/Imagem11.jpg'
      },
    ];

    setBooks(listOfBooks);
    setAllBooks(listOfBooks);
  }, []);

  function filter(query) {
    const result = allBooks.filter(book => book.name.toLowerCase().includes(query));
    setBooks(result);
  }

  function handleChange(event) {
    filter(event.target.value.toLowerCase());
  }


  return (
    <div className='container'>
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Nome do Gibi" name="name" id='name' onChange={handleChange} />
        <label for="name" class="form__label">Nome do Gibi</label>
      </div>

      {books.map(item => (
        <div key={item.id} className="item">
          <img src={item.image} alt={item.name} />
          {/* <div>{item.name}</div> */}
          {/* <div>{item.edition}</div> */}
        </div>
      ))
      }
    </div>
  );
}

export default Home