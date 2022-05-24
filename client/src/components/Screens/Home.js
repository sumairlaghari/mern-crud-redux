import React from "react";
import {
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
//import NavBar from "./NavBar";

//const navigate = useNavigate();

const Home = (setCurrentId) => {
  const posts = useSelector((state) => state.posts);
  const navigate = useNavigate();
  setCurrentId.setCurrentId(0);

  return (
    <>
      {!posts ? (
        <h1>No Data</h1>
      ) : (
        <Row className="p-0 m-0">
          {posts.map((post) => (
            <Col className="m-2" >
              <div key={post._id} post={post}>
                <Card
                  border="dark"
                  text="light"
                  bg="dark"
                  className=""
                  style={{ width: "25em", height: "25em" }}
                >
                  <Card.Header className="bg-danger  fw-bold " as="h5">
                    {post.creator}
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                    width="100%"
                    height="100%"
                  />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {moment(post.createdAt).fromNow()}
                    </Card.Subtitle>
                    <Card.Text>{post.message}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-light  fw-bold ">
                    <small className="text-muted">
                      {post.tags.map((tag) => `#${tag} `)}
                    </small>
                  </Card.Footer>
                  <Button
                    className="fw-bold"
                    variant="danger"
                    type="submit"
                    onClick={() => {
                      setCurrentId.setCurrentId(post._id);
                      navigate("/view");
                    }}
                  >
                    View
                  </Button>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
