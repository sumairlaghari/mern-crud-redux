import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
//import { useLocation } from "react-router-dom";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../actions/posts';

//const location = 2;

const View = (currentId, setCurrentId) => {
  const post = useSelector((state) =>
    currentId.currentId
      ? state.posts.find((message) => message._id === currentId.currentId)
      : null
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //console.log(currentId);

  return !post ? (
    <h1>No Data</h1>
  ) : (
    <Card
      border="dark"
      text="light"
      bg="dark"
      className="mx-auto m-2"
      style={{ width: "28em", height: "28em" }}
    >
      <Card.Header className="bg-danger  fw-bold " as="h5">
        {post.creator}
      </Card.Header>
      <Card.Img variant="top" src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} width="100%" height="100%" />
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
        variant="primary"
        type="submit"
        onClick={() => {
          navigate("/post");
        }}
      >
        Edit
      </Button>
      <Button
        className="fw-bold"
        variant="danger"
        type="submit"
        onClick={() => {
          dispatch(deletePost(post._id))
          navigate("/");
        }}
      >
        Delete
      </Button>
    </Card>
  );
};

export default View;
