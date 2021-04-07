import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import fetchApi from '../services/fetchApi'
import Finder from './Finder'
import ResultList from './ResultList'

function App() {
  const [searchResult, setSearchResult] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    const data = async () => {
      if (searchInput) {
        setSearchResult(await fetchApi(searchInput))
      }
    }
    data()
  }, [searchInput])

  const handleSearch = value => {
    setSearchInput(value)
  }

  return (
    <div className="App">
      <Finder searchInput={searchInput} handleSearch={handleSearch} />
      <ResultList searchResult={searchResult} />
    </div>
  )
}

export default App
