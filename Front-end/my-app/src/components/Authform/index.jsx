import { useState } from "react";
import { AuthUser } from "../../actions/authuser.action";
import { useDispatch } from "react-redux";

function Authform() {
  const dispatch = useDispatch();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(submitedform) {
    submitedform.preventDefault();
    dispatch(AuthUser(userName, password));
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="mail"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  );
}

export default Authform;
