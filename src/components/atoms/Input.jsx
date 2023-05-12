import { useState } from "react"

export const InputText = ({type, placeholder, onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if (inputValue.trim().length >= 1) {

            onNewCategory( inputValue.trim() )
            setInputValue('')
        }
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type = { type }
            value = { inputValue } 
            onChange = { onInputChange }
            placeholder = { placeholder }
        />
    </form>
  )
}
