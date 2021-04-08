import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import fetchApi from '../services/fetchApi'
import Finder from './Finder'
import MovieList from './MovieList'
import Loader from './Loader'

function App() {
  const [searchResult, setSearchResult] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [searchPage, setSearchPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const search = async () => {
      if (searchInput) {
        setIsLoading(true)
        setSearchResult(await fetchApi(searchInput, searchPage))
        setIsLoading(false)
      }
    }
    search()
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
      {isLoading ? (
        <Loader />
      ) : (
        <MovieList
          searchResult={searchResult}
          handlePage={handlePage}
          searchPage={searchPage}
          searchInput={searchInput}
        />
      )}
    </div>
  )
}

export default App
