import React from 'react'

export default function LinkButton({text, url}) {
  return (
    <a 
      className="btn btn-block btn-outline-primary" 
      href={url}
    >
      {text}
    </a>
  )
}
