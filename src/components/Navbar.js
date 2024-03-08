import Link from 'next/link';
import './navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <Link href = "/">
          Jaewon&apos;s Wiki
        </Link>  
        </div>
        <div className="nav-elements active">
          <ul>
            <li>
              <Link href="/appendix">
                Appendix
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
