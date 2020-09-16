import React from 'react';
import {Link} from 'react-router-dom';

function Nav ()
{
    return (

        <nav>
            <h2>Calculator Navigation Bar</h2>
            <ul>
                <li>
                    <Link to="/">
                    Home (Calculators List)
                    </Link>
                </li>
                <li>
                    <Link to="/form1">
                    Form1 Enter Expression (Calculators Form)
                    </Link>
                </li>
                <li>
                    <Link to="/form2">
                    Form2 Enter Expression (Calculators Form)
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;