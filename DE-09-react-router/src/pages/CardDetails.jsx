import { Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const CardDetails = () => {
  const navigate = useNavigate();
  //!buraadaki go home butonları için useNavigate

  const { name } = useParams();

  //!card dan yollanan name i useParams ile buraya tanıttık
  console.log(name);

  return (
    <Container className="text-center mt-4">
      <div>
        <h3>{name}</h3>
        <a href="https://clarusway.com/front-end-developer/">
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${name}.svg`}
          alt=""
          width="300px"
        />
        </a>
        <p>Please click for Clarusway Web Page</p>
      </div>
      <div  className= "m-3">
        <Button className= "m-3" variant="danger" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button onClick={() => navigate("/")}>Go Home </Button>
      </div>
    </Container>
  );
};

export default CardDetails;
