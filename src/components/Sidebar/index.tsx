import { NavLink } from "react-router-dom";
import { Container, ListItem, MenuFooter, MenuHeader } from "./style";


import { IoMdExit } from "react-icons/io";
import { RiMenuFoldLine,RiMenuUnfoldLine } from "react-icons/ri";
import useSidebar from "./useSidebar";



function Sidebar() {
  const {
    toggleMenu,
    menuItems,
    menuVisible
  } = useSidebar();
  

  return (
      <Container bool={menuVisible.bool}>
        <button className="buttonMenu" onClick={() => toggleMenu()}>
          {menuVisible.bool 
            ?
              <RiMenuUnfoldLine/> 
            :
              <RiMenuFoldLine/>
          }

        </button>
        <MenuHeader>
          <div className="containerProfile">
            <div className="containerAvatar">L</div>
            <div className="containerText">
              <div className="containerName hidden">Alison</div>
              <div className="containerDescription hidden">Full stack javascript</div>
            </div>
          </div>
        </MenuHeader>
        <ul>
          {menuItems.map(itens => (
            <ListItem key={itens.to} bool={menuVisible.bool}>
              <NavLink to={itens.to}>
                {<itens.icon/>}
                <span className="hidden">{itens.label}</span>
              </NavLink>
            </ListItem>
          ))}
        </ul>
        <MenuFooter>
          <ul>
            <ListItem bool={menuVisible.bool}>
              <NavLink to="/asd">
                <IoMdExit/>
                <span className="hidden">Sair</span>
              </NavLink>
            </ListItem>
          </ul>         
        </MenuFooter>
      </Container>
    );
}
export default Sidebar;