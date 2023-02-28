import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    return (
        <header className={s.header}>
            <div ref={el => (logotip = el)}>
        <div className={s.header_container}>
          <Link to="/" alt="homepage" className={s.logoLink}>
            <img src={logo} className={s.logoImg} alt="Kapusta-logo" />
          </Link>
          <NavLink to="/developers" className="Blazing">
          {viewPort.width < 768 ? '#28' : 'TEAM FSD #28'}
        </NavLink>
          {isAuthenticated && (
            <div className={s.user_container}>
              <UserInfo />
              <UserLogout />
            </div>
          )}
        </div>


      </div>

        </header>
    )
    
}

export default Header;