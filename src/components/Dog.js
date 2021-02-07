import React from 'react';
import styled from 'styled-components';

import { DogData } from './DogData';

const Dog = styled.div``;

const DogsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;
  width: 1000px;
  margin: 0 auto;
`;

const Dogs = () => {
  return (
    <DogsContainer>
      {DogData.map((dog, index) => {
        return (
          <div key={index}>
            <h2>{dog.breed}</h2>
            <h4>{dog.origin}</h4>
            <p>{dog.colors}</p>
          </div>
        );
      })}
    </DogsContainer>
  );
};

export default Dogs;
