import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [loginData, setLoginData] = useState([]);
  const todays_Date = new Date().toISOString().slice(0, 10);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getUser = localStorage.getItem("userLogin");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);

      const userBirthday = loginData.map((elem, idx) => {
        return elem.date === todays_Date;
      });
      if (userBirthday) {
        setTimeout(() => {
          handleShow();
        }, 3000);
      }
    }
  };

  const history = useNavigate();

  const userLogout = () => {
    localStorage.removeItem("userLogin");
    history("/login");
  };

  useEffect(() => {
    Birthday();
  }, []);
  return (
    <>
      {loginData.length === 0 ? (
        <h1 className="text-center mt-3"> "Nothing is here..."</h1>
      ) : (
        <>
          <h1>Details Page</h1>
          {loginData[0].name}
          <Button onClick={userLogout}>Log Out</Button>

          {loginData[0].date === todays_Date ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{loginData[0].name.toUpperCase()}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Many many happy returns of the day. Happy birthday{" "}
                {loginData[0].name}.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Ok, Thanks!
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Details;
