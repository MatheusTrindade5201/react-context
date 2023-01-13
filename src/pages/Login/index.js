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
import { useContext } from 'react';
import { UsuarioContext } from 'common/context/Usuario';

function Login() {

  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext)

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
        value={saldo}
        onChange={event => setSaldo(event.target.value)}
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Link className='button' to={nome.length < 3 || saldo <= 0 ? '' : '/feira'}>
        <Button
          variant="contained"
          color="primary"
          disabled={nome.length < 3 || saldo <= 0}
        >
          Avançar
        </Button>
      </Link>
    </Container>
  )
};

export default Login;