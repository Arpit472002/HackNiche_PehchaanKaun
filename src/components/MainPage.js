import React from 'react'
export default class MainPage extends React.Component {
   render(){
     return (
        <div>
          <button onClick={this.props.toggle}>Click me!</button>
        </div>
     )
    }   
}