import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>

      <Link to="/appbar">Appbar</Link>
      <Link to="/hollywood">HollyWood</Link>

    </div>
  )
}

export default Header