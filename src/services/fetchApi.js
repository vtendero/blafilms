const fetchApi = async (search, page) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=a461e386&s=${search}&page=${page}`,
  )

  const data = await response.json()

  if (data.Response === 'True') {
    return data
  } else return false
}

export default fetchApi
