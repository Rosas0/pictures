import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImage from './api'
import './App.css'

function App() {
  const [Images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('uste esta biscandop con:', term)
  }

  return (
    <div>
      <h1>App</h1>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
