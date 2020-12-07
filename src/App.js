import React, {useState, useEffect} from 'react'
import Article from './components/Article';
/* import { newsList } from './newsList' */

function App() {
  const [newsList, setNewsList] = useState([])

  function  fetchNewsList() {
    fetch('https://image-mock-data.firebaseio.com/articles.json')
    .then( response => response.json(response) )
    .then ( data => setNewsList(data) )
  }
  useEffect( () => {
    fetchNewsList()
  }, []
  )

  return (
    <div className="container-fluid">
      <div className="row">
          {newsList.map((article, index) => {
            return (
              <Article key={index} article={article} />
            )
          })}
      </div>
      
    </div>
  );
}

export default App;
