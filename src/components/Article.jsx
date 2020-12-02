import React from 'react'
import Badge from './Badge'
import LinkButton from './LinkButton'

export default function Article({article}) {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="col-md-12">
        <img className="img-fluid" src={article.urlToImage} />
        <h2>{article.title}</h2>
        <strong>{article.description}</strong>
        <p>{article.content}</p>
      </div>
      <div className="row">
        <div className="col-xs-6 col-md-6 col-xl-6">
          <p><small>{article.publishedAt}</small></p>
        </div>
        <div className="col-xs-6 col-md-6 col-xl-6 text-right">
          <Badge text={article.author} />
        </div>
      </div>
      <div className="col-md-12">
        <LinkButton text="Gå till nyheten" url={article.url} />
        <p className="text-center">{article.source.name}</p>
      </div>
    </div>
      
  )
}
