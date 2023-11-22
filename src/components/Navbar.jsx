import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    <nav>
        <ul>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/project'>Project</Link></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to='/testimonialial'>Testimonial</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
}

export default Navbar;