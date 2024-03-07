import { Link } from "react-router-dom";


function Error() {
  return (
    <>
      <div >
        <h1>Error type</h1>
        <p >
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </>
  );
}

export default Error;
