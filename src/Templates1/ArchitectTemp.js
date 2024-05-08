import React from "react";
import { Container, Image, Row, Col, Card, InputGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Image1 from '../Templates1/Image/architect.jpg';
import Image2 from '../Templates1/Image/house5.jpg';
import Image4 from '../Templates1/Image/house3.jpg';
import Image3 from '../Templates1/Image/house2.jpg';
import Image5 from '../Templates1/Image/house4.jpg';
import Image6 from '../Templates1/Image/johnDoe.jpg';
import Image7 from '../Templates1/Image/janeDoe.jpg';
import Image8 from '../Templates1/Image/mikeRoss.jpg';
import Image9 from '../Templates1/Image/danStar.jpg';

function ArchitectTemp() {
    return (
        <Container>
            <Image src={Image1} fluid />

            <label className="mt-5">  Projects </label>
            <hr />
            <Row className="mt-4">
                <Col md={3}>
                    <Image src={Image2} width={270} height={180} />
                </Col>
                <Col md={3}>
                    <Image src={Image3} width={270} height={180} />
                </Col>
                <Col md={3}>
                    <Image src={Image4} width={270} height={180} />
                </Col>
                <Col md={3}>
                    <Image src={Image5} width={270} height={180} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={3}>
                    <Image src={Image3} width={270} height={180} />
                </Col>
                <Col md={3}>
                    <Image src={Image2} width={270} height={180} />
                </Col>
                <Col md={3}>
                    <Image src={Image5} width={270} height={180} />
                </Col>
                <Col md={3}>
                    <Image src={Image4} width={270} height={180} />
                </Col>
            </Row>
            <label className="mt-5"> About </label>
            <hr />
            <label> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </label>

            <Row>
                <Col md={3}>
                    <Card className="mt-4 border-0">
                        <Card.Img variant="top" src={Image6} />
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Text className="text-muted">CEO & Founder</Card.Text>
                            <Card.Text className="fs-6">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</Card.Text>
                        </Card.Body>
                        <button variant="primery" className="border-0 p-2">Contact</button>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="mt-4 border-0">
                        <Card.Img variant="top" src={Image7} />
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Text className="text-muted">CEO & Founder</Card.Text>
                            <Card.Text className="fs-6">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</Card.Text>
                        </Card.Body>
                        <button variant="primery" className="border-0 p-2">Contact</button>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="mt-4 border-0">
                        <Card.Img variant="top" src={Image8} />
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Text className="text-muted">CEO & Founder</Card.Text>
                            <Card.Text className="fs-6">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</Card.Text>
                        </Card.Body>
                        <button variant="primery" className="border-0 p-2">Contact</button>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="mt-4 border-0 " >
                        <Card.Img variant="top" src={Image9} />
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Text className="text-muted">CEO & Founder</Card.Text>
                            <Card.Text className="fs-6">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</Card.Text>
                        </Card.Body>
                        <button variant="primery" className="border-0 p-2">Contact</button>
                    </Card>
                </Col>
            </Row>

            <label className="mt-5 fs-3"> Contact </label>
            <hr />
            <label className="mb-3">Lets get in touch and talk about your next project. </label>
            <Row>
                <input placeholder="Name" type="text" className="mb-3"/>
                <input placeholder="Email" type="text" className="mb-3"/>
                <input placeholder="Subject" type="text" className="mb-3"/>
                <input placeholder="Comment" type="text" />
            </Row>
            <button variant="primery" className="border-0 p-2">SEND MESSAGE</button>
            
        </Container>
    );
}

export default ArchitectTemp;