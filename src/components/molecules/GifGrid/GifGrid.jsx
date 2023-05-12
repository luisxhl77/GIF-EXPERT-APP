import React from 'react'
import { useFetchGifs } from '../../../hooks';
import { CardImage } from '../cardImage/CardImage';


export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);

  return (
    <div>
      {isLoading && <h2>ESTAMOS CARGANDO....</h2>}
      
      <h3>{category}</h3>
      <div className='card-grid' >
        {
          images?.map( item => (
            <CardImage 
              key={item.id}
              title={item.title}
              image={item.url}
            />
          ))
        }
      </div>
    </div>
  )
}