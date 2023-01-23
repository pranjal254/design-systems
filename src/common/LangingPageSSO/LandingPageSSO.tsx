import React from "react";
import ssologinImg from "../../assets/images/SSOLogin1.svg";
import microsoft from "../../assets/images/Microsoft.png";
import { CardBody, Card, Container, CardFooter, CardTitle } from "reactstrap";

interface LandingPageSSOProps {
  projectName: string;
  handleRedirect: () => void;
}

const LandingPageSSO = (props: LandingPageSSOProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${ssologinImg})`,      
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card
        style={{
          float: "left",
          position: "absolute",
          left: "55vw",
          top: "35vh",
          zIndex: "1000",
          padding: "5px",
          fontWeight: "bold",
          width: "25vw",
          height: "50vh",
          background: "rgba(255, 255, 255, 0.2)",
          border: "1px solid #E5EEFF",
          boxShadow: "4px 4px 16px rgba(146, 148, 151, 0.25)",
          backdropFilter: "blur(30px)",
          borderRadius: "4px",
        }}
      >
        <CardBody>
          <CardTitle
            style={{
              fontSize: "4rem",
              fontWeight: "600",
              color: "#FE5000",
              textAlign: "center",
              paddingTop: "2rem",
            }}
          >
            {props.projectName}
          </CardTitle>
          <div style={{ padding: "2rem", marginTop: "5vh" }}>
            <span style={{ fontSize: "1rem" }}>
              Sign in using Microsoft credentials
            </span>
            <div style={{ marginBottom: "9vh", marginTop: "1vh" }}>
              <button
                className="tre-btn primary md"
                style={{ fontSize: "1rem", width: "100%" }}
                type="submit"
                onClick={props.handleRedirect}
              >
                <span style={{ marginRight: "1rem" }}>SIGN IN</span>
                <img src={microsoft} />
              </button>
            </div>
          </div>
        </CardBody>
        <CardFooter
          style={{
            fontSize: "0.8rem",
            textAlign: "left",
            fontWeight: "400",
            paddingLeft: "2rem",
          }}
        >
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
          }} */}
    </div>
  );
};

export default LandingPageSSO;
