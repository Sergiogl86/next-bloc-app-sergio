import { useState } from "react";

import { useRouter } from "next/router";
import { uuid } from "uuidv4";

const Form = () => {
  const router = useRouter();
  const [login, setLogin] = useState({
    userId: uuid(),
    userName: "",
    userAvatar: "",
  });

  const changeData = (event) => {
    setLogin({
      ...login,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await localStorage.setItem("login", JSON.stringify(login));

    setLogin({
      userId: uuid(),
      userName: "",
      userAvatar: "",
    });
    router.push("/postlist");
  };

  return (
    <>
      <h2>Login</h2>
      <div className="container loginPage">
        <div className="row">
          <form
            className="col"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <div className="form-group">
              <label htmlFor="userName">Name: </label>
              <input
                data-testid="login-title"
                type="text"
                id="userName"
                className="form-control"
                value={login.userName}
                onChange={changeData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userAvatar">Avatar: </label>
              <input
                data-testid="login-body"
                type="text"
                id="userAvatar"
                className="form-control"
                value={login.userAvatar}
                onChange={changeData}
              />
            </div>
            {login.avatar && (
              <img
                src={login.userAvatar}
                className="img-thumbnail"
                alt={`image-${login.userName}`}
              />
            )}
            <div className="form-group mt-3">
              <button
                data-testid="Post-Form"
                type="submit"
                className="btn btn-dark"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
