import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [news, setNews] = useState([]);
  const getNews = () => {
    fetch(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=654a397303fe4ae99ddf3a79b472ee9b
    `)
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  };

  useEffect(() => {
    getNews();
  }, [news]);
  return (
    <div className="mt-14 p-5 grid grid-cols-1 xl:grid-cols-4 gap-10 place-items-center">
      {news
        ?.filter((data) => data.title.includes(props.search))
        .map((item) => {
          return (
            <>
              <Link to="/details" state={{ data: item }}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src={item.urlToImage}
                    alt={item.title}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="text-gray-700 text-base">{item.content}</p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
    </div>
  );
};

export default Home;
