import Movie from './Movie'
import PreviousPage from './PreviousPage'
import NextPage from './NextPage'

const MovieList = props => {
  if (props.searchResult === undefined) {
    return <p className="reply-message">No results yet</p>
  } else if (props.searchResult === false) {
    return <p className="reply-message">No results for {props.searchInput}</p>
  }

  const resultItem = props.searchResult.Search.map(result => {
    return (
      <li key={result.imdbID} className="search-item" title={result.Title}>
        <Movie result={result} />
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

export default MovieList
