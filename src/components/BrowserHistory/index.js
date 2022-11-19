import {Component} from 'react'

import BrowserHistoryListItem from '../BrowserHistoryListItem'
import './index.css'

class BrowserHistory extends Component {

  const {initialHistoryList} = this.props
  state = {searchInput: ' ', historyList: initialHistoryList}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {historyList} = this.state
    const updateList = historyList.filter(eachList => eachList.id !== id)

    this.setState({historyList: updateList})
  }

  render() {
    const {searchInput, historyList} = this.state

    const searchResult = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="header">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search"
              alt="search"
            />
            <input
              type="search"
              className="input-bar"
              placeholder="Search"
              onChange={this.onSearchInput}
            />
          </div>
        </div>
        <ul className="ul-container">
          {searchResult.map(eachList => (
            <BrowserHistoryListItem
              browserListDetails={eachList}
              key={eachList.id}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default BrowserHistory
