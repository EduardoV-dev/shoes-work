import { Container, Row, Col } from "react-bootstrap";

import Shoes1Img from "../assets/shoes-1.png";
import Shoes2Img from "../assets/shoes-2.png";

import Boots1Img from "../assets/boots-1.jpg";
import Boots2Img from "../assets/boots-2.png";
import Boots3Img from "../assets/boots-3.png";
import Boots4Img from "../assets/boots-4.png";

import Sandals1Img from "../assets/sandals-1.png";
import Sandals2Img from "../assets/sandals-2.png";

export const Catalog = (): JSX.Element => (
    <>
        <h1>Catálogo</h1>

        <h2 className="mt-4">Zapatos y Zapatillas</h2>

        <Container className="mt-4">
            <Row>
                <Col>
                    <img
                        className="img-fluid rounded w-100 h-100"
                        alt="Zapatos"
                        src={Shoes1Img}
                    />
                </Col>

                <Col>
                    <img
                        className="img-fluid rounded w-100 h-100"
                        alt="Zapatos"
                        src={Shoes2Img}
                    />
                </Col>
            </Row>
        </Container>

        <h2 className="mt-2">Botas</h2>

        <Container className="mt-4">
            <Row>
                <Col>
                    <img
                        className="img-fluid rounded w-100 h-100"
                        alt="Zapatos"
                        src={Boots1Img}
                    />
                </Col>

                <Col>
                    <img
                        className="img-fluid rounded w-100 h-100"
                        alt="Zapatos"
                        src={Boots2Img}
                    />
                </Col>

                <Col>
                    <img
                        className="img-fluid rounded w-100 h-100"
                        alt="Zapatos"
                        src={Boots3Img}
                    />
                </Col>

                <Col>
                    <img
                        className="img-fluid rounded w-100 h-100"
                        alt="Zapatos"
                        src={Boots4Img}
                    />
                </Col>
            </Row>
        </Container>

        <h2 className="mt-2">Sandalias</h2>

        <Container className="my-4">
            <Row>
                <Col>
                    <img
                        className="img-fluid rounded w-100 h-100"
                        alt="Zapatos"
                        src={Sandals1Img}
                    />
                </Col>

                <Col>
                    <img
                        className="img-fluid rounded w-100 h-100"
                        alt="Zapatos"
                        src={Sandals2Img}
                    />
                </Col>
            </Row>
        </Container>
    </>
);
