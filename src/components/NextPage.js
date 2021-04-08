import { ReactComponent as ChevronRight } from '../images/chevron-right.svg'

const NextPage = props => {
  const canIncreasePage = () => {
    return Math.ceil(props.searchResult.totalResults / 10) > props.searchPage
  }
  const handleOnClick = () => {
    if (canIncreasePage()) {
      props.handlePage(props.searchPage + 1)
    }
  }

  return (
    <div className="chevron">
      {canIncreasePage() && <ChevronRight onClick={() => handleOnClick()} />}
    </div>
  )
}

export default NextPage
