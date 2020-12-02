import React from 'react'
import Article from './components/Article';
import { newsList } from './newsList'

function App() {
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
