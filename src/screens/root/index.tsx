import {Link, Outlet} from "react-router-dom"

export const RootScreen = () => {
  return (
    <div>
      <h2>Root screen</h2>
      <nav>
        <ul style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 32,
      }}>
          <li>
            {/* <a href="/home">Home</a> */}
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            {/* <a href="/products">Products</a> */}
            <Link to={'/products'}>Products</Link>
          </li>
          <li>
            {/* <a href="/profile">Profile</a> */}
            <Link to={'/profile'}>Profile</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}