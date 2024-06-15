import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import PasswordDetails from '../PasswordDetails/index'
import './index.css'

class PasswordManager extends Component {
  state = {
    websiteName: '',
    userName: '',
    password: '',
    isActive: false,
    searchInput: '',
    userAccountDetailsList: [],
  }

  onDeleteUserAccountDetails = id => {
    const {userAccountDetailsList} = this.state
    const filteredUserList = userAccountDetailsList.filter(
      eachAccountDetails => eachAccountDetails.id !== id,
    )

    this.setState({userAccountDetailsList: filteredUserList})
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  randomNumaber = () => Math.ceil(Math.random() * 7)

  onAddUserAccountDetails = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state

    const newAccountDetails = {
      id: uuid(),
      websiteName,
      userName,
      password,
      randomNumaber: this.randomNumaber(),
    }

    this.setState(prevState => ({
      userAccountDetailsList: [
        ...prevState.userAccountDetailsList,
        newAccountDetails,
      ],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  onDisplayTextORImage = () => {
    const {userAccountDetailsList, isActive, searchInput} = this.state
    const searchResults = userAccountDetailsList.filter(eachAccountDetails =>
      eachAccountDetails.websiteName
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    if (searchResults.length === 0) {
      return (
        <div className="no-password-Container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="password-manager-image"
          />
          <p className="passwords-heading">No Passwords</p>
        </div>
      )
    }
    return (
      <ul className="user-account-details-Container">
        {searchResults.map(eachAccountDetails => (
          <PasswordDetails
            key={eachAccountDetails.id}
            eachAccountDetails={eachAccountDetails}
            isActive={isActive}
            detleteAccountDetails={this.onDeleteUserAccountDetails}
          />
        ))}
      </ul>
    )
  }

  onWebsiteNameChange = event => {
    this.setState({websiteName: event.target.value})
  }

  onUserNameChange = event => {
    this.setState({userName: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {userAccountDetailsList, websiteName, userName, password} = this.state
    return (
      <div>
        <div className="password-manager-Container">
          <form
            className="user-input-Container"
            onSubmit={this.onAddUserAccountDetails}
          >
            <div>
              <h1 className="add-password-heading">Add New Password</h1>
            </div>
            <div className="user-input-details">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="user-input-logo"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="user-input-content"
                onChange={this.onWebsiteNameChange}
                value={websiteName}
              />
            </div>
            <div className="user-input-details">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="user-input-logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="user-input-content"
                onChange={this.onUserNameChange}
                value={userName}
              />
            </div>
            <div className="user-input-details">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="user-input-logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="user-input-content"
                onChange={this.onPasswordChange}
                value={password}
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="passwords-manager-Container">
          <div className="password-information">
            <div className="vamsi">
              <h1 className="passwords-heading">Your Passwords</h1>
              <p>{userAccountDetailsList.length}</p>
            </div>
            <div className="user-input-details">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="user-input-logo"
              />
              <input
                type="search"
                placeholder="Search"
                className="user-input-content"
                onChange={this.onSearchInputChange}
              />
            </div>
          </div>
          <hr className="horizontal-ruler" />
          <div className="checkbox-Container">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              onClick={this.onToggleIsActive}
            />
            <label htmlFor="checkbox" className="label-text">
              Show Passwords
            </label>
          </div>
          {this.onDisplayTextORImage()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
