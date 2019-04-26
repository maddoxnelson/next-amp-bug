import React, { Component } from 'react'
import { useAmp, withAmp } from 'next/amp'

class Sound extends Component {
    static async getInitialProps({ query }) {
        const { sound } = query;
        
        return {
          sound
        }
      }

    state = {
        sound: this.props.sound
    }

  render() {
    return (
      <div>
        {this.state.sound}
      </div>
    )
  }
}

export default withAmp(Sound)