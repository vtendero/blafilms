const Finder = props => {
  const handleChange = ev => {
    props.handleInput({
      value: ev.target.value,
    })
  }

  const handleOnSubmit = ev => {
    ev.preventDefault()
  }

  const handleOnClick = () => {
    props.handleSearch()
  }

  return (
    <form className="search" onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={props.searchInput}
        onChange={handleChange}
      />
      <input type="button" value="Search" onClick={handleOnClick} />
    </form>
  )
}

export default Finder
