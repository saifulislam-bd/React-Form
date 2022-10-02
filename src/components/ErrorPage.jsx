import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const history = useNavigate();
  return (
    <>
      <div className="container">
        <div className="error d-flex flex-column justify-content-lg-center align-items-center">
          <h4>404 Not Found</h4>
          <Button className="btn btn-primary" onClick={() => history("/")}>
            Go to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
