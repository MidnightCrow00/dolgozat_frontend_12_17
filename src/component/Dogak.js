import React from "react";
import { Container, Row, Table, Col } from "react-bootstrap";
import Doga from "./Doga";

export default function Dogak(props) {
  return (
    <Row>
      <Container className="mt-4">
        <h2 className="text-center mb-4">Admin oldal</h2>
        <Col md={4} lg={12}>
          <Table table table-striped table-bordered>
            <thead>
              <tr>
                <th>Szakdolgozat címe</th>
                <th>Készítők neve</th>
                <th>GitHub link</th>
                <th>Szakdolgozat elérhetősége</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.szakdogaLista.map((element) => {
                return <Doga adat={element} key={element.id} />;
              })}
            </tbody>
          </Table>
        </Col>
      </Container>
    </Row>
  );
}
