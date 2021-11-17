import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const CreateUser = () => {
  const [addPost, setAddPost] = useState({
    title: "",
    body: "",
  });
  const router = useRouter();
  const postUrl = "https://isdi-blog-posts-api.herokuapp.com/posts";

  const changeData = (event) => {
    setAddPost({
      ...addPost,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(postUrl, addPost);
      router.push("/postlist");
      setAddPost({
        title: "",
        body: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Create Post</h2>
      <div className="container loginPage">
        <div className="row">
          <form
            className="col"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <div className="form-group">
              <label htmlFor="title">Title: </label>
              <input
                data-testid="login-title"
                type="text"
                id="title"
                className="form-control"
                value={addPost.title}
                onChange={changeData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body: </label>
              <input
                data-testid="login-body"
                type="text"
                id="body"
                className="form-control"
                value={addPost.password}
                onChange={changeData}
              />
            </div>
            <div className="form-group mt-3">
              <button
                data-testid="Post-Form"
                type="submit"
                className="btn btn-dark"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
