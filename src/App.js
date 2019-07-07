import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

  }

  showMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }

  render() {
    return (
      <div className="App">
          <div className="Background">
        <nav>

          <div className='container'>
            <div className='title'>Start Bootstrap</div>
            <ul className='nav-links'>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
            <button className='nav-button' onClick={this.showMenu}>Menu</button>
          </div>
            <div className={this.state.showMenu ? 'nav-menu nav-menu-show' : 'nav-menu'}>
              <ul className='nav-list'>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
              </ul>
            </div>
        </nav>
      <header>
        <div className='header-container'>
        <div className='welcome'>Welcome to Our Studio!</div>
        <div className='meet'>It's nice to meet you</div>
        <button className='contact'>Tell Me More</button>
          </div>
      </header>
        </div>
      <section>
      </section>
      </div>
    );
  }
}
export default App;