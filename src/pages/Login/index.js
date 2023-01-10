import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core';
import { Link } from 'react-router-dom';

function Login({nome, setNome, saldo, setSaldo}) {
  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={event => setNome(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
        type="number"
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Link className='button' to={'/feira'}>
        <Button
          variant="contained"
          color="primary"
        >
          Avançar
        </Button>
      </Link>
    </Container>
  )
};

export default Login;