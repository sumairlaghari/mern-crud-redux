import { Form, Button, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../actions/posts";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
      navigate("/");
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
      navigate("/");
    }
  };

  return (
    <Container className="p-4">
      <Form className="">
        <Form.Group className="mb-3" controlId="creator">
          <Form.Label>Creator</Form.Label>
          <Form.Control type="text" placeholder="your name" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="description" as="textarea" rows={3} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        </Form.Group>


        {/* <Form.Group controlId="file" className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file"  value={postData.selectedFile} onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value })  }    />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="tags">
          <Form.Label>Tags</Form.Label>
          <Form.Control type="text" placeholder="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
        </Form.Group>

        <div className="m-1 mb-2" ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

        <Button
          className="m-1"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          className="m-1"
          variant="danger"
          onClick={clear}
        >
          Clear
        </Button>
      </Form>
    </Container>
  );
};

export default Post;
