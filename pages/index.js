import React, { Component } from 'react'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        Dogs make sounds!
        <ul>
            <li><a href="/dog-sounds/bark">Bark!</a></li>
            <li><a href="/dog-sounds/woof">Woof!</a></li>
        </ul>
      </div>
    )
  }
}
