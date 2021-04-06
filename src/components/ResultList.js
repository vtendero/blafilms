import ResultData from './ResultData'

const ResultList = props => {
  const resultItem = props.searchResult.Search.map(result => {
    return (
      <li key={result.imdbID} className="search-item" title={result.Title}>
        <ResultData result={result} />
      </li>
    )
  })

  return (
    <section className="search-results-list">
      <ul>{resultItem}</ul>
    </section>
  )
}

export default ResultList
