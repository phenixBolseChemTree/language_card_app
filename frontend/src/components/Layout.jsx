import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  console.log(123);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">main</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/dictionary">dictionary</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout;
