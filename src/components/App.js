import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import fetchApi from '../services/fetchApi'
import Finder from './Finder'
import ResultList from './ResultList'

function App() {
  const [searchResult, setSearchResult] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [searchPage, setSearchPage] = useState(1)

  useEffect(() => {
    const data = async () => {
      if (searchInput) {
        setSearchResult(await fetchApi(searchInput, searchPage))
      }
    }
    data()
  }, [searchInput, searchPage])

  const handleSearch = value => {
    setSearchInput(value)
    setSearchPage(1)
  }

  const handlePage = page => {
    setSearchPage(page)
  }

  return (
    <div className="App">
      <Finder handleSearch={handleSearch} />
      <ResultList
        searchResult={searchResult}
        handlePage={handlePage}
        searchPage={searchPage}
      />
    </div>
  )
}

export default App
