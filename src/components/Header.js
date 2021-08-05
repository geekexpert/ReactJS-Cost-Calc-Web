
const LinkList = [1, 2, 3, 4];

const NavBar = () => {
  return (

      <ul className="navbar-nav">
        {LinkList.map(
          (x, index)=> (<NavItem value={x} key={index}/>)
        )}
      
      </ul>

  )
}

const NavItem = ({value}) => {
  return (
    <li className="nav-item">
      <a className="nav-link"> Link- {value}  </a>
    </li>
  )
}

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#">Logo</a>
      <NavBar />
    </nav>
  )
}


export default Header;





