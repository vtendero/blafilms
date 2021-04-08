import { ReactComponent as ChevronLeft } from '../images/chevron-left.svg'

const PreviousPage = props => {
  const canDecreasePage = () => {
    return props.searchPage > 1
  }

  const handleOnClick = () => {
    if (canDecreasePage()) {
      props.handlePage(props.searchPage - 1)
    }
  }

  return (
    <div className="chevron">
      {props.searchPage > 1 && <ChevronLeft onClick={handleOnClick} />}
    </div>
  )
}

export default PreviousPage
