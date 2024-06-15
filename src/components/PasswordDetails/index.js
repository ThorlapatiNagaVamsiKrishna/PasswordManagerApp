import './index.css'

const PasswordDetails = props => {
  const {eachAccountDetails, isActive, detleteAccountDetails} = props
  const {id, websiteName, userName, password} = eachAccountDetails
  const firstLetter = websiteName.slice(0, 1).toUpperCase()

  const onDeleteList = () => {
    detleteAccountDetails(id)
  }

  const contentDisplay = isActive ? (
    <p className="website-name">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-image"
    />
  )
  return (
    <li className="account-details-list">
      <div className="list-description-container">
        <div className="information-container">
          <div className="user-first-letter">
            <p>{firstLetter}</p>
          </div>
          <div className="user-information-container">
            <p className="website-name">{websiteName}</p>
            <p className="website-name">{userName}</p>
            {contentDisplay}
          </div>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteList}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordDetails
