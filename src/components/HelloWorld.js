import React, { Component } from 'react'
import CardList from '../components/card-list/CardList'

class HelloWorld extends Component {
  state = {
    monsters: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}> </CardList>
      </div>
    )
  }
}

export default HelloWorld
