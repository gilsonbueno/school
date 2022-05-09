import React, { useEffect, useState } from 'react';
import '../styles/globals.scss'

function Home() {
  return (
    <div className='container'>
      <p className='title'>Gibis Turma da Monica</p>
      <List />
      <button onClick={topFunction} id="myBtn" title="Go to top">Topo da pagina</button>
    </div>
  )
}

function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function List() {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    window.onscroll = function() {scrollFunction()};
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
      {
        id: '12',
        name: 'Turma da monica quem acredita no papai noel 56 robo correndo',
        edition: 56,
        image: '/images/Imagem12.jpg'
      },
      {
        id: '13',
        name: 'Turma da monica todos a bordo do bidu-balao 59',
        edition: 59,
        image: '/images/Imagem13.jpg'
      },
      {
        id: '14',
        name: 'Turma da monica uma foto do limoeiro fotos',
        edition: 0,
        image: '/images/Imagem14.jpg'
      },
      {
        id: '15',
        name: 'Monica meme assustada azul',
        edition: 0,
        image: '/images/Imagem15.jpg'
      },
      {
        id: '16',
        name: 'Turma da monica a amarelinha radical dragao ogro fogo 57 shrek',
        edition: 57,
        image: '/images/Imagem16.jpg'
      },
      {
        id: '17',
        name: 'Cebolinha o clube dos genios mirins, detetive contrato terno 7',
        edition: 7,
        image: '/images/Imagem17.jpg'
      },
      {
        id: '18',
        name: 'Turma da monica o maior vilao de todos os tempos raios amarelo correndo',
        edition: 7,
        image: '/images/Imagem18.jpg'
      },
      {
        id: '19',
        name: ' Turma da monica tempo bom para festejar 4 aranha robo gemeas',
        edition: 4,
        image: '/images/Imagem19.jpg'
      },
      {
        id: '20',
        name: 'Monica cuidado que o jardim é meu 5 cebolinha monica correndo bruxa brava caverna verde',
        edition: 5,
        image: '/images/Imagem20.jpg'
      },
      {
        id: '21',
        name: 'Turma da monica lixo eletronico cientista 6 robos assustados',
        edition: 6,
        image: '/images/Imagem21.jpg'
      },
      {
        id: '22',
        name: 'Monica confusao na redacao lixeiro enfermeira bombeiro gato branco papel lapis 7',
        edition: 7,
        image: '/images/Imagem22.jpg'
      },
      {
        id: '23',
        name: '7 Magali o aumentador melancia banana frutas queijo amarelo bolinho',
        edition: 7,
        image: '/images/Imagem23.jpg'
      },
      {
        id: '24',
        name: '70 turma da monica tem muita lava nesse chao monica cebolinha cascao magali sofa verde',
        edition: 70,
        image: '/images/Imagem24.jpg'
      },
      {
        id: '25',
        name: '69 Turma da monica menos de uma legua submarina sereia marinheiro agua lula polvo mar capitao',
        edition: 69,
        image: '/images/Imagem25.jpg'
      },
      {
        id: '26',
        name: '4 Monica o misterioso desaparecimento da flor da carmen da esquina monica sansao cebolinha girassol',
        edition: 4,
        image: '/images/Imagem26.jpg'
      },
      {
        id: '27',
        name: '02 Alamanaque da monica cebolinha magali melancia cascao mauricio de sousa souza desenho mesa',
        edition: 2,
        image: '/images/Imagem27.jpg'
      },
      {
        id: '28',
        name: '85 Almanaque da monica previsao do tempo mapa roupa social vermelha camera microfone',
        edition: 85,
        image: '/images/Imagem28.jpg'
      },
      {
        id: '29',
        name: '03 Almanaque turma da monica selva barco rio agua peixe fantasma indio canoa',
        edition: 3,
        image: '/images/Imagem29.jpg'
      },
      {
        id: '30',
        name: '51 turma da monica tem lugar pra todo mundo nessa turma parquinho escorrega mauricio souza sousa',
        edition: 51,
        image: '/images/Imagem30.jpg'
      },
      {
        id: '31',
        name: '02 Almanaque turma da monica vulcao et robo elefante indio',
        edition: 2,
        image: '/images/Imagem31.jpg'
      },
      {
        id: '32',
        name: '07 Almanaque da magali bicicleta flores cestinha comida',
        edition: 7,
        image: '/images/Imagem32.jpg'
      },
      {
        id: '33',
        name: '14 Cascao eo pe de melao feijao ceu arvore cebolinha',
        edition: 14,
        image: '/images/Imagem33.jpg'
      },
      {
        id: '34',
        name: '14 cebolinha um bone muito descolado patinete sansao',
        edition: 14,
        image: '/images/Imagem34.jpg'
      },
      {
        id: '35',
        name: '07 Almanaque do chico bento pintando quadro boina vermelha',
        edition: 7,
        image: '/images/Imagem35.jpg'
      },
      {
        id: '36',
        name: '06 Almanaque da magali conta padaria comida pao lista',
        edition: 6,
        image: '/images/Imagem36.jpg'
      },
      {
        id: '37',
        name: '14 Monica a origem do caos anjinho anjo nuvem dinossauro vulcao',
        edition: 14,
        image: '/images/Imagem37.jpg'
      },
      {
        id: '38',
        name: '14 turma da monica eliminados palco cortina polvo lula jacare crocodilo luzes',
        edition: 14,
        image: '/images/Imagem38.jpg'
      },
      {
        id: '39',
        name: '07 almanaque da monica selfie celular piscando foto rosa',
        edition: 7,
        image: '/images/Imagem39.jpg'
      },
      {
        id: '40',
        name: '07 almanaque turma da monica pedras carro elefante amarelo indio et',
        edition: 7,
        image: '/images/Imagem40.jpg'
      },
      {
        id: '41',
        name: '05 turma da monica prazer sou o novo vilao furacao tornado malvado',
        edition: 5,
        image: '/images/Imagem41.jpg'
      },
      {
        id: '42',
        name: '06 almanaque da monica jogo da velha tabela rosto mostrando a lingua cebolinha sansao coelho lapis',
        edition: 6,
        image: '/images/Imagem42.jpg'
      },
    ];

    setBooks(listOfBooks);
    setAllBooks(listOfBooks);
  }, []);

  function filter(query) {
    const wordList = query.split(' ');
    const filteredBooks = allBooks.filter(book => {
      return wordList.every(word => {
        return book.name.toLowerCase().includes(word);
      }
      )}
    );
  
    setBooks(filteredBooks);
  }

  function handleChange(event) {
    filter(event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase());
  }


  return (
    <div className='container'>
      <div className="form__group field">
        <input type="input" className="form__field" placeholder="Nome do Gibi" name="name" id='name' onChange={handleChange} />
        <label for="name" className="form__label">Nome do Gibi</label>
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