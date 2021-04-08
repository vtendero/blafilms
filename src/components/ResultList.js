import ResultData from './ResultData'
import PreviousPage from './PreviousPage'
import NextPage from './NextPage'

const ResultList = props => {
  if (!props.searchResult) {
    return <p>No results yet</p>
  }

  const resultItem = props.searchResult.Search.map(result => {
    return (
      <li key={result.imdbID} className="search-item" title={result.Title}>
        <ResultData result={result} />
      </li>
    )
  })

  return (
    <section className="search-results">
      <PreviousPage
        handlePage={props.handlePage}
        searchResult={props.searchResult}
        searchPage={props.searchPage}
      />
      <ul className="search-results-list">{resultItem}</ul>
      <NextPage
        handlePage={props.handlePage}
        searchResult={props.searchResult}
        searchPage={props.searchPage}
      />
    </section>
  )
}

export default ResultList
