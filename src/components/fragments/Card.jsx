import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export default function CardItem(props) {
  const { poster, title, desc } = props;
  // console.log(title);
  return (
    <Card className="mt-20 w-96 ml-10 bg-deep-purple-50">
      <CardHeader
        color="blue-gray"
        className="relative h-56 hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1  duration-300">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
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
        <Typography className="truncate">{desc}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
