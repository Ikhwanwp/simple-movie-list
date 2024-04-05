import FooterSection from "../layouts/FooterSection";
import ContentSection from "../layouts/ContentSection";
import { getMovieList } from "../../assets/utils/api";
import { searchMovie } from "../../assets/utils/api";
import { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
function index() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setMovieList(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 0) {
      const query = await searchMovie(q);
      setMovieList(query.results);
      console.log(query.results);
    }
  };
  return (
    <>
      <div className="min-h-screen w-full ">
        <div className="flex flex-col justify-center items-center min-h-screen gap-10">
          <h1 className="text-5xl text-purple-50 bg-pink-200 p-3 rounded-lg border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[1px_2px_0px_0px_rgba(0,0,0,1)] font-extrabold">Tama Movie List</h1>
          <div className="w-72">
            <Input
              variant="standard"
              label="Search Movie"
              placeholder="Search Movie"
              onChange={({ target }) => search(target.value)}
            />
          </div>
        </div>
      </div>
      <ContentSection movieList={movieList} />
      <FooterSection />
    </>
  );
}

export default index;
