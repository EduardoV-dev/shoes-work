import { Col, Container, Row } from "react-bootstrap";
import HeroImg from "../../assets/hero-1.png";
import Hero2Img from "../../assets/hero-2.png";

import styles from "./index.module.scss";

export const HomeHero = (): JSX.Element => (
    <Container className={styles.container}>
        <Row>
            <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
                <h1>Pasos de Excelencia: El Alma del Calzado Nicaragüense</h1>
                <h2 className="mt-2 mt-lg-5">
                    Donde la Tradición y la Calidad Se Unen en Cada Paso
                </h2>
            </Col>
            <Col
                className="mt-5 mt-lg-0"
                xs={12}
                lg={6}
                style={{ position: "relative" }}
            >
                <img
                    className={`${styles.img} img-fluid w-100`}
                    alt="Calzado y Cultura"
                    src={HeroImg}
                />

                <img
                    className={`${styles.img} img-fluid w-100`}
                    alt="Calzado y Cultura 2"
                    src={Hero2Img}
                />
            </Col>
        </Row>
    </Container>
);
