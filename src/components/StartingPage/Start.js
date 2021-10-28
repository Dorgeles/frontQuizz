import React, { useState } from "react";
import { Button, Col, Container, Form, Row} from "react-bootstrap";
import CollImage from "../../images/undraw_Calling_re_mgft.svg";
import QuizzImage from "../../images/undraw_Control_panel_re_y3ar(1).svg";
import PlayerService from "../../servives/PlayerService";
import "./Start.css";
import { toast } from "react-toastify";
import "react-toastify/dist/react-toastify.esm"
import { useHistory } from 'react-router';

toast.configure();
const Start = () => {
  const history = useHistory();
    const [number, setNumber] = useState("");
    const toster = message =>{
        toast.warn(message, {
            position: "top-right",
            autoClose: 5000,
            className: "notifierN"
            });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        PlayerService.createUser(number).then((result) => {
            if (result === 0) {
              history.push("/quizz",{number:number})
            } else {
              toster(result)
            }
        });
        console.log("the number you entered was", number);
      }
  return (
    <>
      <Container className="mt-5">
        <Row>

          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
          <img className="icon-img" src={CollImage} alt="icon"/>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Numéro de téléphone</Form.Label>
                <Form.Control type="text" placeholder="Numéro"  value={number} onChange={(e) => setNumber(e.target.value)}/>
                <Form.Text className="text-muted">
                  Vous devez enregistrer un numéro de téléphone pour jouer.
                </Form.Text>
              </Form.Group>
              <Button variant="warning" type="submit">
                Jouer
              </Button>
            </Form>
          </Col>

          <Col lg={8} md={6} sm={12} >
             <img className="w-100" src={QuizzImage} alt="Quizz image"/> 
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Start;
