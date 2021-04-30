import React, { useState } from 'react';
import Data from './data';
const List = () => {
  const [peoples, setPeoples] = useState(Data);

  return (
    <main>
      <section className='container'>
        <h3>{peoples.length} birthdays today</h3>
        {peoples.map((people) => {
          const { id, name, image, age } = people;
          return (
            <article key={id} className='person'>
              <img src={image} alt='profile_photo' />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
        <button onClick={() => setPeoples([])}>clear all</button>
      </section>
    </main>
  );
};

export default List;
