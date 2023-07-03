// Karakter bileşeniniz buraya gelecek
import React from 'react';
import styled from 'styled-components';

const CharacterContainer = styled.div`
  margin-bottom: 25px;
`;

const Character = ({ name }) => {
  return (
    <CharacterContainer>
      <h3>{name}</h3>
    </CharacterContainer>
  );
};

export default Character;
