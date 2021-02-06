import React from 'react';

import { DogData } from './DogData';

const Dogs = () => {
  return (
    <div>
      <ul>
        {DogData.map((dog, index) => {
          return (
            <li>
              {dog.breed} - {dog.origin}- {dog.colors}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
