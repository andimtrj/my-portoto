import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home(params) {
  return (
    <>
      <div className="big-box">
        <Row>
          <Col>
            <h1 className="title">Hi There</h1>
          </Col>
          <Col xs={6}>
            <h3 className="desc-title">Ini Title Desc</h3>
            <p className="desc">Ini Description</p>
          </Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
