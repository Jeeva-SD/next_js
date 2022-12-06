import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import style from '../../../styles/header.module.scss';

const Header = () => {
    const expand = 'lg';

    return (
        <Navbar bg="dark" variant='dark' expand={expand} className={`${style.header} mb-3`}>
            <Container fluid>
                <Navbar.Brand className={style.brand}>Jee6</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className='justify-content-end flex-grow-1 pe-3'>
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Link</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    );
};

export default Header;