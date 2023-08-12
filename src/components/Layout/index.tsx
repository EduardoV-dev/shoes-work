import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

interface Props {
    children: React.ReactNode;
}

interface NavigationItem {
    label: string;
    to: string;
}

const NAVIGATION_LINKS: NavigationItem[] = [
    {
        label: "Principal",
        to: "/",
    },
    {
        label: "Historia y Tradición",
        to: "/history",
    },
    {
        label: "Cadena Productiva",
        to: "/productive-frames",
    },
    {
        label: "Catálogo",
        to: "/catalog",
    },
    {
        label: "Proceso de Manufactura",
        to: "/manufacturing-process",
    },
];

export const Layout = ({ children }: Props): JSX.Element => {
    return (
        <div className={styles.layout}>
            <header>
                <Navbar className="bg-body-tertiary" expand="xl">
                    <Container className="py-2">
                        <NavLink to="/" style={{ textDecoration: "none" }}>
                            <Navbar.Brand>Industria del Calzado</Navbar.Brand>
                        </NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {NAVIGATION_LINKS.map((link) => (
                                    <NavLink
                                        to={link.to}
                                        key={link.to}
                                        className={({ isActive }) =>
                                            `${styles.nav__link} ${isActive ? styles.active : ""}`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <main className="my-3">
                <Container className={styles.layout__content}>{children}</Container>
            </main>
        </div>
    );
};
