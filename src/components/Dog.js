import React from 'react';

import { DogData } from './DogData';

const Dogs = () => {
  return (
    <div>
      <div>
        {DogData.map((dog, index) => {
          return (
            <div key={index}>
              <h2>{dog.breed}</h2>
              <h4>{dog.origin}</h4>
              <p>{dog.colors}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dogs;
