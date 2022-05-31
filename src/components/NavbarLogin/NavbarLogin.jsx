import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Image } from "react-bootstrap";
import style from './NavbarLogin.module.css'
import gambar from "../../images/logo.png"
import GetAllUser from "../../hooks/GetAllUser";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarLogin(props) {
    const Get_allUser = GetAllUser(props)
    const data2 = Get_allUser?.data
    // console.log("ini get", data2);

    const dataLogin = {
        username: "",
        password: "",
    };

    const [data, setData] = useState(dataLogin)
    const user = localStorage.getItem("username")
    const pass = localStorage.getItem("password")

    const handleSubmit = () => {
        // let name = name; //fikry =>username login
        // let password = password; //fikryfikry =>password login
        const newData = {
            username: "",
            password: ""
        }
        // console.log(newData);
        localStorage.setItem("username", data.username);
        localStorage.setItem("password", data.password);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={style.NavH} variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/HomeLogin" >
                        <h3 className={style.text2}>
                            <Image src={gambar} width="50%" className={style.space} />
                        </h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            {/* {
                                data2?.map((item, index2) => {

                                    if (item.username == user && item.password == pass) {
                                        return (
                                            <>
                                                <Nav.Link href="#" >
                                                    <div >
                                                        <Button className={style.Tombol}>
                                                            Logout
                                                        </Button>
                                                    </div>
                                                </Nav.Link>
                                            </>
                                        )
                                    } else {
                                        return (
                                            <>
                                                <Nav.Link href="Login" ><h6 className={style.text1}>Log in</h6></Nav.Link>
                                                <Nav.Link href="Register" >
                                                    <div >
                                                        <Button className={style.Tombol}>
                                                            Daftar Sekarang
                                                        </Button>
                                                    </div>
                                                </Nav.Link>
                                            </>
                                        )
                                    }

                                })
                            } */}
                            {
                                data2?.find(index => index.username == user && index.password == pass) ?
                                    <>
                                        <Nav.Link href="Homelogin" >
                                            <div >
                                                <Button className={style.Tombol} >
                                                    Home

                                                </Button>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link href="Login" >
                                            <div >
                                                <Button className={style.Tombol} onClick={handleSubmit}>
                                                    Logout

                                                </Button>
                                            </div>
                                        </Nav.Link>
                                        {/* <Nav.Link  >
                                            <FaIcons.FaUser size={30} className={style.iconProfile} />
                                        </Nav.Link> */}
                                        <Link to={'/Profiles'}>
                                            <FaIcons.FaUser size={30} className={style.iconProfile} />
                                        </Link>
                                    </>
                                    :
                                    <>

                                        <Nav.Link href="Login" ><h6 className={style.text1}>Log in</h6></Nav.Link>
                                        <Nav.Link href="Register" >
                                            <div >

                                                <Button className={style.Tombol}>
                                                    Daftar Sekarang
                                                </Button>
                                            </div>
                                        </Nav.Link>

                                    </>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}