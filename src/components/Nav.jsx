import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <ol>
                <Link to='/'><li> Home</li></Link>
                <Link to='/newpost'><li> New</li></Link>

            </ol>
        </div>
    )
}
