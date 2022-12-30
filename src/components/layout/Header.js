import { useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Progress from '../common/Progress';
import { homeTabs } from '../../constants/navigation';
import style from '../../../styles/header.module.scss';

const Header = () => {
    const expand = 'sm';
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    router?.events?.on('routeChangeStart', () => setLoading(true));
    router?.events?.on('routeChangeComplete', () => setLoading(false));
    router?.events?.on('routeChangeError', () => setLoading(false));

    return (
        <div className={`${style.nav_bar} shadow p-0`}>
            <Navbar bg="dark" variant='dark' expand={expand} className={`${style.header}`}>
                <Container>
                    <Navbar.Brand className={`${style.brand} pointer`} onClick={() => router.push('/')}>Jee6</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Collapse>
                        <Navbar.Offcanvas
                            style={{ width: '60%' }}
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Jee6
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className='justify-content-end flex-grow-1 pe-3'>
                                    {homeTabs.map((tab, index) => (
                                        <Nav.Link
                                            className={router.pathname === tab.path ? style.nav_link_active : style.nav_link}
                                            key={index}
                                            onClick={() => {
                                                router.push(tab.path);
                                            }}>
                                            <span className={style.nav_content}>
                                                <>{tab.icon}</>
                                                <>{tab.title}</>
                                            </span>
                                        </Nav.Link>
                                    ))}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {loading && <Progress />}
        </div>
    );
};

export default Header;