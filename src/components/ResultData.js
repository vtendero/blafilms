import placeholderImg from '../images/placeholder.png'

const ResultData = props => {
  return (
    <>
      <img
        src={
          props.result.Poster === 'N/A' ? placeholderImg : props.result.Poster
        }
        alt={`${props.result.Title} poster`}
      />
      <h5 className="title">{props.result.Title}</h5>
      <p className="meta">{`${props.result.Type} | ${props.result.Year}`}</p>
    </>
  )
}

export default ResultData
