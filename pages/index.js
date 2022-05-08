import React from 'react';
import styles from '../css/styles.module.css';

const list = [
    {
      id: '1',
      name: 'Gibi 1',
      year: 1988,
      image: 'https://picsum.photos/id/237/200/300'
    },
    {
      id: '2',
      name: 'Gibi 2',
      year: 1990,
      image: 'https://picsum.photos/id/238/200/300'
    },
  ];
  
  const ComplexList = () => (
    <ul className={styles.list}>
      {list.map(item => (
        <li key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.year}</div>
        </li>
      ))}
    </ul>
  );


export default ComplexList