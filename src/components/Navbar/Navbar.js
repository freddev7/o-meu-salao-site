import Oslogo from '../../assets/img/logo.png'
import './styles.css'
import { Component } from 'react';

class Navbar extends Component {

  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked:
    !this.state.clicked})
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
            <a className="active" href={'/About'}>SOBRE</a>
          </li>
          <li>
            <a href={'/Services'}>SERVIÇOS</a>
          </li>
          <li>
            <a href={'/Invisible'}>ALONGAMENTO</a>
          </li>
          <li>
            <a href={'/Courses'}>CURSOS</a>
          </li>
          <li>
            <a href={'/Products'}>PRODUTOS</a>
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