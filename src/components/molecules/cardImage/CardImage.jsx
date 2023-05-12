import React from 'react'

export const CardImage = ({image, title, id}) => {
  return (
    <div className="card">
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}
