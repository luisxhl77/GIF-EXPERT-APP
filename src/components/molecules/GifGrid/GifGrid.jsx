import React from 'react'
import { useFetchGifs } from '../../../hooks';


export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);

  return (
    <div>
      {isLoading && <h2>ESTAMOS CARGANDO....</h2>}
      
      <h3>{category}</h3>
      <div className='card-grid' >
        {
          images?.map( item => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.url} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}