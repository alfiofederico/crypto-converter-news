import { useEffect,useState } from "react";
import axios from "axios";




function NewsFeed() {

  const [articles, setArticles] = useState(null)


  useEffect(() => {
   

    var options = {
      method: "GET",
      url: "https://crypto-news15.p.rapidapi.com/news/amb",
      headers: {
        "x-rapidapi-host": "crypto-news15.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  })




  const firstArticles= articles?.slice(1,4)

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="font-bold text-center">Latest News</h2>
      {firstArticles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url} target="_blank" rel="noreferrer">
            <p className="text-center text-sm pb-2">- {(article.title).substring(0,100)}...</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed
