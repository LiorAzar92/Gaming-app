import React, { useState } from "react";
import Wrapper from "../assets/LandingPage";
import Register from "./Register";
// import { Modal } from "react-bootstrap";

export default function Landing() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Wrapper>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            pet <span>adoption</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
            auctor augue mauris augue neque gravida. Donec pretium vulputate
            sapien nec. Ultricies leo integer malesuada nunc vel risus commodo.{" "}
          </p>
          <button onClick={handleShow} className="btn btn-hero">
            Login/Register
          </button>
          {/* <Modal show={show} onHide={handleClose}> */}
          <Register />
          {/* </Modal> */}
        </div>
      </div>
    </Wrapper>
  );
}
