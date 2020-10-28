import styled from 'styled-components';
export const StyledApp = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 50%;
  }
  .followers {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;

    .follower {
      width: 20%;
      border: 1px solid black;
      padding: 1%;
      margin: 1%;

      h2 {
        cursor: pointer;
      }
    }
  }
`;
