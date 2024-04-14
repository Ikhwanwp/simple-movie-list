import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function CardItem({ poster_path, title, overview, id }) {
  return (
    <Card className="mt-20 w-96 ml-10 bg-deep-purple-50">
      <CardHeader
        color="blue-gray"
        className="relative h-56 hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1  duration-300">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="card-image"
          className=""
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2">
          {title}
        </Typography>
        <Typography className="truncate">{overview}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/movie/${id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
