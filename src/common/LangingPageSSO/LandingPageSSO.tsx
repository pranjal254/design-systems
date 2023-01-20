import React from "react";
//import ssologinImg from "../../assets/images/SSOLogin.svg";
// import microsoft from "../../assets/images/Microsoft";
import { CardBody, Card, Container, CardFooter, CardTitle } from "reactstrap";

interface LandingPageSSOProps {
  projectName: string;
}

const LandingPageSSO = (props: LandingPageSSOProps) => {
  return (
    <div style={{ backgroundColor: "#FFFFFF", marginLeft: "-12px" }}>
      <Container fluid>
        <Card
          style={{
            float: "left",
            position: "absolute",
            left: "60%",
            top: "25%",
            zIndex: "1000",
            backgroundColor: "#1a4a74",
            padding: "5px",
            color: "#FFFFFF",
            fontWeight: "bold",
            width: "25%",
            height: "45%",
            border: "1px solid white",
          }}
        >
          <CardBody>
            <CardTitle
              style={{
                fontSize: "3vw",
                fontWeight: "bold",
                color: "#FE5000",
                textAlign: "center",
              }}
            >
              {props.projectName}
            </CardTitle>
            <br />
            <br />
            <br />
            <label style={{ fontSize: ".8rem" }}>
              Sign in using Microsoft credentials
            </label>
            <br />
            <div>
              <button style={{ fontSize: "0.9rem" }} type="submit">
                Sign In
                {/* <img src={microsoft} className="ps-3" /> */}
              </button>
            </div>
          </CardBody>
          <CardFooter style={{ fontSize: "0.6rem", textAlign: "left" }}>
            © Copyright Tredence 2022
          </CardFooter>
        </Card>
        {/* <img
          src={ssologinImg}
          alt=""
          className="img-fluid"
          style={{
            width: "100vw",
            height: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        /> */}
      </Container>
    </div>
  );
};

export default LandingPageSSO;
