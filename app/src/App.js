import React from 'react';
import logo from './completeCodingLogo.png';
import './App.css';
import EmailContainer from './EmailContainer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>My Email App</h1>
            </header>
            <EmailContainer />
        </div>
    );
}

export default App;
