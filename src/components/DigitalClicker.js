import React, { Component } from 'react';

class DigitalClicker extends Component {
   state = { 
      timesClicked: 0
   }

   handleClick = () => {
      const clicked = this.state.timesClicked + 1
      this.setState({ 
         timesClicked: clicked
      });
   }
   render() { 
      return ( 
         <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      );
   }
}
 
export default DigitalClicker;