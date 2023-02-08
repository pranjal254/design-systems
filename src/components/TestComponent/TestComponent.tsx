import React from "react";
import "../../../sass/tre-card/tre-card.scss";
import { HeaderType1 } from "../../common";
import { SidebarType1 } from "../../common";
import { TableType1 } from "../../common";
import { Row, Col } from "reactstrap";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

import TreCard from "../TreCard";

interface TestProps {
  testProp: string;
}

const TestComponent = (props: TestProps) => {
  return (
    <>
      <HeaderType1
        onCreateAccount={() => {}}
        onLogin={function noRefCheck() {}}
        onLogout={function noRefCheck() {}}
        user={{
          name: "Pranjal Gaikwad",
        }}
        projectName={props.testProp}
      />
      <div style={{ display: "flex" }}>
        <SidebarType1
          height="90vh"
          navItems={[
            {
              title: "Home",
              path: "#",
              icon: FaHome,
            },
            {
              title: "Profile",
              path: "#",
              icon: FaUser,
            },
            {
              title: "Settings",
              path: "#",
              icon: FaCog,
            },
          ]}
        />
        {/* <Row style={{ margin: "2vh 0 0 0.2vw" }}>
          <Col md={4}>
            <TreCard
              backgroundColor="#f0f8ff"
              buttonLabel="Create"
              buttonSize="sm"
              buttonVariant="primary"
              cardText="Create custom segments using rule-based approach or Behavioral segments using Unsupervised ML or segments based on prior campaign response."
              cardTitle="Create Segment"
              onClick={() => {}}
            />
          </Col>
          <Col md={4}>
            <TreCard
              backgroundColor="#f0f8ff"
              buttonLabel="Analyze"
              buttonSize="sm"
              buttonVariant="primary"
              cardText="Create custom segments using rule-based approach or Behavioral segments using Unsupervised ML or segments based on prior campaign response."
              cardTitle="Create Segment"
              onClick={() => {}}
            />
          </Col>
          <Col md={4}>
            <TreCard
              backgroundColor="#f0f8ff"
              buttonLabel="Export"
              buttonSize="sm"
              buttonVariant="primary"
              cardText="Create custom segments using rule-based approach or Behavioral segments using Unsupervised ML or segments based on prior campaign response."
              cardTitle="Create Segment"
              onClick={() => {}}
            />
          </Col>
        </Row> */}
        <Row>
        <TableType1/>
        </Row>
      </div>
    </>
  );
};

export default TestComponent;
