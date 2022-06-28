import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About page</Link>
            </li>
            </ul>
        </nav>
    </header>

    <main className="page-wrap">
        <Outlet />
    </main>

    </>
  )
};

export default Layout;