import { useEffect, useState } from "react";
import axios from "axios";

function News() {
    const val = 'cricket'
  const API_URL =
    `https://newsapi.org/v2/everything?q=${val}&from=2025-02-05&sortBy=publishedAt&pageSize=10&apiKey=e54118daa98a49d3b56d68f4a15fd580`;
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(API_URL);
      setNews(response.data.articles);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {news.length > 0 &&
            news.map((element, index) => (
              <div className="col-3" key={index}>
                <div className="card" style={{width : "100%"}}>
                  <img src={element.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">
                      {element.content}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default News;
