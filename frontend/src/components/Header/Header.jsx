import React,{useRef,useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Button } from "reactstrap";
import logo from '../../assets/images/logo.png'
import './Header.css'
const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const Header = () => {
  const headerRef=useRef(null)
  const stickyHeaerFunc=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
    stickyHeaerFunc()
    return window.removeEventListener('scroll',stickyHeaerFunc)
  })
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">

                {/* logo  */}
                <img src={logo} alt="Logo of Website" style={{width:"20%"}}/>

                {/* menu  */}
                <div className="navigation">
                    <ul className="menu d-flex align-items-center gap-5">
                            {
                                nav_links.map((item,index)=>
                                <li className="nav__item" key={index}>
                                        <NavLink to={item.path} className={navClass=>navClass.isActive ? 'active__link':''}>{item.display}</NavLink>
                                </li>
                                )
                            }
                    </ul>
                </div>

                {/* navbar right  */}

                <div className="nav__right d-flex align-items-center gap-4">
                        <div className="nav__btns d-flex align-items-center gap-4">
                            <Button className="btn secondary__btn"><Link to="/login">Login</Link></Button>
                            <Button className="btn primary__btn"><Link to="/register">Register</Link></Button>
                        </div>
                        <span className="mobile__menu">
                        <i class="ri-menu-line"></i>
                        </span>
                </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
