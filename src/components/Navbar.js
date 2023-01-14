import React, { Component } from 'react';
//logo changed in home logo.svg - kept logo place, changed svg after redrawing logo
import logo from '../logo.svg';
import './Navbarstyle.css';

class Navbar extends Component {
    // click handle for responsive navbar - menu slides in from right when clicking burger icon
    // upon clicking close icon reverse happens. State change on line 29 if bars(burger icon) clicked then show X and vice-versa 
    state = {clicked : false};
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    render() {
        
        return (
            <div>
                <nav>
                    <a href='../public/index.html' >
                    <img src={logo} className="nav-logo" alt="logo" />
                    </a>
                    <div>
                        <ul id='links' className = {this.state.clicked ? "#links active"  : "links"}>
                            <li><a className='active' href='../public/index.html' ></a>cases</li>
                            <li><a href='../public/index.html'></a>career</li>
                            <li><a href='../public/index.html'></a>contact</li>
                            <li><a href='../public/index.html'></a>culture</li>
                        </ul>
                    </div>
                    <div id='mobile' onClick = {this.handleClick}>
                        <i id='bar' className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                   

                </nav>
            </div>
        );
    }
}

export default Navbar;
