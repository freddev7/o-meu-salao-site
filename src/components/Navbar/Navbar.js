import logoomscr from '../../assets/img/logoomscrwhite.svg'
import './styles.css'
import { Component } from 'react';
import { MenuData } from "./MenuData";

class Navbar extends Component {

  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {

    return (
        <nav className="NavbarItems">
          <div className="containerLogo">
            <a href={'/'}>
              <img src={logoomscr} alt='logosign' />
            </a>
          </div>
          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuData.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>{item.title}</a>
                </li>
              )
            })}
          </ul>
      </nav>
    );
  }
}

export default Navbar;