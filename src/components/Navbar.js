import Link from 'next/link'; // Import Link from Next.js
import './navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          Jaewon&apos;s Wiki
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
