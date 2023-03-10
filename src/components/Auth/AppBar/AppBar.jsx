import { Link } from 'react-router-dom';
import { Header } from '../../Header/Header';
import logo from '../../../images/logo.svg';
import { StyledHeader } from './AppBar.styled';


export const AppBar = () => {
  return (
    
    <StyledHeader>
   
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    
      <Header />
    </StyledHeader>
  );
};
