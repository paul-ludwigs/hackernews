import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Articles from './components/Articles';
import Search from './components/Search';
import Pagination from './components/Pagination'
import axios from "axios";

function App() {

  const [searchValue, setSearchValue] = useState("new");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(20);

  useEffect(()=>{
    const getData= async ()=>{
      setLoading(true);
      const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchValue}&hitsPerPage=100`);
      setArticles(res.data.hits);
      setLoading(false);
    }

    getData();

  }, [searchValue]);

  
  const indexOfLastArticle = currentPage * articlesPerPage; 
  const indexofFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexofFirstArticle, indexOfLastArticle);

  //Change page
  const paginate = pageNumber => { setCurrentPage(pageNumber)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hackernews</h1>
      </header>
      <Search setSearchValue={setSearchValue} />
      <Articles articles={currentArticles} loading={loading} searchValue={searchValue} />
      <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate} />
      

    </div>
  );
}

export default App;
