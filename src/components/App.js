import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import { ReactComponent as ChevronLeft } from '../images/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../images/chevron-right.svg'
import ResultList from './ResultList'
import Finder from './Finder'
import fetchApi from '../services/fetchApi'

function App() {
  const [searchResult, setSearchResult] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [searchCriteria, setSearchCriteria] = useState({
    search: '',
  })

  useEffect(() => {
    const data = async () => {
      if (searchCriteria.search) {
        setSearchResult(await fetchApi(searchCriteria.search))
      }
    }
    data()
  }, [searchCriteria])

  const handleInput = data => {
    setSearchInput(data.value)
  }

  const handleSearch = () => {
    setSearchCriteria({ search: searchInput })
  }

  return (
    <div className="App">
      <Finder
        searchInput={searchInput}
        handleInput={handleInput}
        handleSearch={handleSearch}
      />
      {!searchResult ? (
        <p>No results yet</p>
      ) : (
        <div className="search-results">
          <div className="chevron">
            <ChevronLeft />
          </div>
          <ResultList searchResult={searchResult} />
          <div className="chevron">
            <ChevronRight />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
