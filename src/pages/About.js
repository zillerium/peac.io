import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player'

const About = () => {



  return (
    <div >

      <header >
	  <h1>About Us</h1>
        <p>Contractual Payments without an intermediary.
        </p>
<Container>
	  <Row><Col></Col>
	  <Col>
                 <ReactPlayer url="https://www.youtube.com/watch?v=JU0dBWZQr5I"/>
          </Col>
	  <Col></Col>
	  </Row>
	  <Row><Col></Col>
	  <Col>
                 <ReactPlayer url="https://www.youtube.com/watch?v=spfkaIOsy4k"/>
          </Col>
	  <Col></Col>
	  </Row>
	  <Row><Col></Col>
	  <Col>
                 <ReactPlayer url="https://www.youtube.com/watch?v=CZVN0IpZ8K4"/>
          </Col>
	  <Col></Col>
	  </Row>
	  <Row><Col></Col>
	  <Col>
                 <ReactPlayer url="https://www.youtube.com/watch?v=2l61KwzZYEo"/>
          </Col>
	  <Col></Col>
	  </Row>
	  <Row><Col></Col>
	  <Col>
                 <ReactPlayer url="https://www.youtube.com/watch?v=DlzJ7DpnMFE"/>
          </Col>
	  <Col></Col>
	  </Row>
	  </Container>

      </header>
    </div>
  );
}

export default About;
