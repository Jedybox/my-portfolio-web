import React from 'react';
import Profile from './assets/profile-pic.jpg';
import './App.css';

function App() {
  return (
    <>
      <aside>
        <img src={Profile} alt="Profile-pic" />
        <h1 className='Name'>Jhon Ericsson Ytac</h1>
        <nav>
          <ul>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Education Background</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <footer><button>Hire Me</button></footer>
      </aside>
      <main></main>
    </>
  );
}

export default App;
