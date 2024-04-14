import CardItem from "../fragments/Card";

const ContentSection = (props) => {
  const { movieList } = props;

  return (
    <div className="flex flex-wrap justify-center ">
      {movieList.map((movie) => (
        <CardItem
          key={movie.id}
          {...movie}
        />
      ))}
    </div>
  );
};

export default ContentSection;
