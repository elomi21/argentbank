import Cardaccount from "../../components/Cardaccount"

function Logged() {
  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Cardaccount />
      </main>
    </>
  );
}

export default Logged;
