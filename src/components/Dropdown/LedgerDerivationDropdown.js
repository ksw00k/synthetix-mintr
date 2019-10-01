import React from 'react';
import styled from 'styled-components';

import { PLarge } from '../Typography';

const LedgerDerivationDropdown = () => {
  return (
    <Wrapper>
      <Paths>
        {['Derivation Path 1', 'Derivation Path 2'].map(path => {
          return (
            <PathElement key={path} onClick={() => console.log(path)}>
              <PLarge>{path}</PLarge>
            </PathElement>
          );
        })}
      </Paths>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 16px;
  width: 300px;
  padding: 16px;
  background-color: ${props => props.theme.colorStyles.panels};
  border: 1px solid ${props => props.theme.colorStyles.borders};
  box-shadow: 0px 5px 10px 5px ${props => props.theme.colorStyles.shadow1};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;
`;

const Paths = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
`;

const PathElement = styled.li`
  padding: 4px 0 0 16px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colorStyles.buttonTertiaryBgFocus};
    color: ${props => props.theme.colorStyles.buttonPrimaryText};
  }
`;

export default LedgerDerivationDropdown;
