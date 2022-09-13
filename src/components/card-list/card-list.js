import React from 'react';
import './style.css';

function CardList() {
  return (
    <ul className='card-list'>
      <li>
        <button className='card-list__card' type='button'>
          100 &#8381;
        </button>
      </li>
      <li>
        <button className='card-list__card' type='button'>
          250 &#8381;
        </button>
      </li>
      <li>
        <button className='card-list__card' type='button'>
          500 &#8381;
        </button>
      </li>
      <li>
        <button className='card-list__card' type='button'>
          1000 &#8381;
        </button>
      </li>
      <li>
        <button className='card-list__card' type='button'>
          2500 &#8381;
        </button>
      </li>
    </ul>
  );
}

export default CardList;
