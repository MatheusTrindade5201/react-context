import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import { useCarrinhoContext } from 'common/context/Carrinho';

export default function NavBar() {

  const { carrinho, quantidadeTotal } = useCarrinhoContext();

  return (
    <Nav>
      <Logo />
        {quantidadeTotal}
      <Link
       to={carrinho.length >= 1 ? '/carrinho' : '/feira'}
       >
        <IconButton disabled={carrinho.length < 1}>
          <Badge
            color="primary"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </Nav>
  )
}