import React, { Component, Fragment } from 'react';
import SideNav from './side_nav';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
    state = {
        links: [
            {
                to: '/',
                text: 'Home'
            },
            {
                to: '/chat',
                text: 'Chat'
            }
        ]
    }

    componentDidMount(){
            console.log('side nav ref:', this.sideNav)
            M.Sidenav.init(this.sideNav);
    }

    setSideNavRef= (element) =>{
        this.sideNav= element;

    }

    render() {
        const linkElements = this.state.links.map(link=>{
            return (
                <li key={link.to}>
                    <Link to={link.to}>{link.text}</Link>
                </li>
            )
        })





        return (
            <Fragment>
                        <nav className="main-nav">
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Firebase Chat App</Link>
                    <a href="#" data-target="side-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down" >
                        {linkElements}
                    </ul>
                </div>
            </nav>

            <SideNav setRef={this.setSideNavRef} links = {linkElements}/>
            


            </Fragment>

        )
    }
}


export default Nav;