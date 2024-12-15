import { Link } from 'react-router'

export const MainView = () => {
  return (
    <div>
      <h1>Main View</h1>
      <nav>
        <Link to='/login'>Login</Link>
      </nav>
    </div>
  )
}
