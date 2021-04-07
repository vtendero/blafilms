const Finder = props => {
  let searchValue
  const handleChange = ev => {
    searchValue = ev.target.value
  }

  const handleOnSubmit = ev => {
    ev.preventDefault()
  }

  const handleOnClick = () => {
    props.handleSearch(searchValue)
  }

  return (
    <form className="search" onSubmit={handleOnSubmit}>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <button onClick={handleOnClick}>Search</button>
    </form>
  )
}

export default Finder
