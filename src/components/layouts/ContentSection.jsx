import CardItem from "../fragments/Card";

const ContentSection = (props) => {
  const { movieList } = props;

  return (
    <div className="flex flex-wrap justify-center -mt-40">
      {movieList.map((movie) => (
        <CardItem
          key={movie.id}
          poster={movie.poster_path}
          title={movie.original_title}
          desc={movie.overview}
        />
      ))}
    </div>
  );
};

export default ContentSection;
