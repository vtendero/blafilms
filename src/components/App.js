import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import { ReactComponent as ChevronLeft } from '../images/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../images/chevron-right.svg'
import ResultList from './ResultList'

function App() {
  const [searchResult, setSearchResult] = useState()

  useEffect(() => {
    const search = async () => {
      const response = await fetch(
        'http://www.omdbapi.com/?apikey=a461e386&s=king',
      )

      const data = await response.json()

      if (!searchResult) {
        setSearchResult(data)
      }
    }

    search()
  })

  return (
    <div className="App">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
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
