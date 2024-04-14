import { useRouteError, Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-5xl font-bold text-deep-orange-400">Ooopss!!</h1>
      <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl text-deep-orange-700">{error.statusText || error.message}</p>

      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
