import './index.css'

const BrowserHistoryListItem = props => {
  const {browserListDetails, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserListDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="li-container">
      <div className="content-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo-url" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <div>
        <button
          type="button"
          onClick={onClickDelete}
          id="delete"
          testid="delete"
          className="del-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="del-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryListItem
