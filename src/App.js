import { useState } from 'react'
import { GifGrid } from './components/molecules';
import { InputText } from './components/atoms';


function App() {
  const [category, setCategories] = useState(['One Punch']);
  
  const onAddCategory = ( newCategory ) => {
    if( !category.includes(newCategory) ){
      setCategories([ newCategory, ...category ])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>GIF EXPERT APP</h1>

        <InputText 
          type='text'
          placeholder='Buscar gifs'
          onNewCategory= { onAddCategory }
        />

        {
          category?.map((item,idx) => (
            <GifGrid key={idx} category={item}/>
          ))
        }
      
      </header>
    </div>
  );
}

export default App;
