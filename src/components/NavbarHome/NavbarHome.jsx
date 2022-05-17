import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Image } from "react-bootstrap";
import style from './NavbarHome.module.css'
import gambar from "../../images/logo.png"

export default function NavbarHome() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={style.NavH} variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/" >
                        <h3 className={style.text2}>
                            <Image src={gambar} width="50%" className={style.space} />
                        </h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="Login" ><h6 className={style.text1}>Log in</h6></Nav.Link>
                            <Nav.Link href="Register" >
                                <div >
                                    <Button className={style.Tombol}>
                                        Daftar Sekarang
                                    </Button>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}