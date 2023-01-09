import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Nav>
      <Logo />
      <Link to={'/carrinho'}>
        <IconButton>
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