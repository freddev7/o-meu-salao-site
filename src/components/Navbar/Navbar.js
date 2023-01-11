import Oslogo from '../../assets/img/logo.png'
import './styles.css'
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked:
        !this.state.clicked
    })
  }
  render() {

    return (
      <nav>
        <a href={'/'}>
          <img src={Oslogo} alt='Oslogo' />
        </a>
        <div>
          <ul id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}>
            <li>
              <Link to='/About'>SOBRE</Link>
            </li>
            <li>
              <Link to='/Services'>SERVIÇOS</Link>
            </li>
            <li>
              <Link to='/Invisible'>INVISIBLE</Link>
            </li>
            <li>
              <Link to='/Courses'>CURSOS</Link>
            </li>
            <li>
              <Link to='/Products'>PRODUTOS</Link>
            </li>
            <li>
              <a href={'/Contact'}>CONTATO</a>
            </li>
            <li>
              <a href={'/Franchise'}>FRANQUIAS</a>
            </li>
            <li>
              <a href={'/Blog'}>BLOG</a>
            </li>
          </ul>
        </div>
        <div id='mobile' onClick={this.handleClick}>
          <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;