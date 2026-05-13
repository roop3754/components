    import React from 'react';

    function Header() {
        return (
            <header className="main-header">
                <div className="logo">
                    <h1>My Components Project</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </header>
        );
    }

    export default Header;