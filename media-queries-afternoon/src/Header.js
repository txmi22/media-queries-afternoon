import React, {Component} from 'react';
import './App.css';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            showDropdown: false
        }
    }

    toggleDropdown = () => this.setState({showDropdown: !this.state.showDropdown})
    render(){
        return(
            <header class="header">
                <nav id="mainNav">
                    <div class="container-one">
                        <a class="navBrand">Start Bootstrap</a>
                    </div>
                    <div class="container-two">
                        <a class="nav-btn">SERVICES</a>
                        <a class="nav-btn">PORTFOLIO</a>
                        <a class="nav-btn">ABOUT</a>
                        <a class="nav-btn">TEAM</a>
                        <a class="nav-btn">CONTACT</a>
                    </div>
                    <nav id='mobile-nav' onClick={this.toggleDropdown}>
                        Menu
                    </nav>
                    {this.state.showDropdown ?
                        <div id='dropdown'>
                        <a class="nav-btn">SERVICES</a>
                        <a class="nav-btn">PORTFOLIO</a>
                        <a class="nav-btn">ABOUT</a>
                        <a class="nav-btn">TEAM</a>
                        <a class="nav-btn">CONTACT</a>
                        </div> : null}
                </nav>
            </header>
        )
    }
};
export default Header;