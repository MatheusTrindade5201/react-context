import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media(min-width: 768px) {
    margin: 0 auto;
    width: 60%;
  }

  .button{
    display: flex;
    flex-direction: column;
    text-decoration: none
  }

  
`;


export const Titulo = styled.h2`
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const InputContainer = styled(FormControl)`
  margin-bottom: 30px;
`