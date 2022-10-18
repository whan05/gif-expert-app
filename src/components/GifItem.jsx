import React from 'react'

export const GifItem = ({url, title}) => {
  return (
    <div className='card'>
        <img src={url} alt="image category" />    
        <p>{title}</p>
    </div>
  )
}
