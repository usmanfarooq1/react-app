import React from "react";
import './Header.css'
import {  Link } from 'react-router-dom';
export default class Header extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <header className='container'>
                <div className='heading'>
                    <h2>Movies and Articles</h2>
                </div>
                <div className='links-container'>
                <div className='item'>
                        <Link to="/">Articles</Link>
                    </div>
                    <div className='item'>
                        <Link to="/movies">Movies</Link>
                    </div>
                    
                </div>
            </header>
        );
    }

}
