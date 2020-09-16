import React from 'react';
import {Link} from 'react-router-dom';
import '../css/nav.css';

function Nav ()
{
    return (

        <nav className="calc-nav">
            <h2>Calculator Navigation Bar</h2>
            <ul>
                <li>
                    <Link to="/Home">
                    Home Welcome Page
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    Home (Calculators Archive)
                    </Link>
                </li>
                <li>
                    <Link to="/form1">
                    Separate input fields (Local Calculators Form)
                    </Link>
                </li>
                <li>
                    <Link to="/form2">
                    Single input field (Global Calculators Form)
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;