const fetchApi = async search => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=a461e386&s=${search}`,
  )

  const data = await response.json()

  if (data.response === 'True') {
    return data
  } else return false
}

export default fetchApi
