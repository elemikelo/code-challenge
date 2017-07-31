import React from 'react';
import './footer.css';

function Header() {
  return (
    <footer className="Footer">
      <ul className="List-inline">
        <li><a href="https://github.com/elemikelo" target="_blank" className="Link"><i className="fa fa-github" ></i></a>
        </li>
        <li><a href="https://www.linkedin.com/in/luis-miguel-alvarez/" target="_blank" className="Link"><i className="fa fa-linkedin"></i></a>
        </li>
        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=lm.alvarezmaidero@gmail.com" target="_blank" className="Link"><i className="fa fa-envelope"></i></a>
        </li>
      </ul>
    </footer>
  )
}

export default Header; 