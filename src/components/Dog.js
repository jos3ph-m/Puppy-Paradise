import React from 'react';
import styled from 'styled-components';

import { DogData } from './DogData';

const Dog = styled.div`
  img {
    height: 250px;
    width: 350px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const DogsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;
  width: 1200px;
  margin: 0 auto;
`;

const Dogs = () => {
  return (
    <DogsContainer>
      {DogData.map((dog, index) => {
        return (
          <Dog key={index}>
            <img src={dog.image} alt="" />
            <h2>{dog.breed}</h2>
            <h4>{dog.origin}</h4>
            <p>{dog.colors}</p>
          </Dog>
        );
      })}
    </DogsContainer>
  );
};

export default Dogs;
