import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetailMovie } from "../../assets/utils/api";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { Breadcrumbs } from "@material-tailwind/react";
function DetailMovieSection() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getDetailMovie(id).then((result) => {
      setMovie(result);
    });
  }, [id]);

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <Breadcrumbs>
        <Link
          to="/"
          className="opacity-60">
          Home
        </Link>
        <a href="#">{movie.original_title}</a>
      </Breadcrumbs>
      <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader
          floated={false}
          color="blue-gray">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="ui/ux review check"
            className="w-full h-72 object-cover"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-medium">
              {movie.original_title}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700">
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {movie.popularity}
            </Typography>
          </div>
          <Typography color="gray">{movie.overview}</Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default DetailMovieSection;
