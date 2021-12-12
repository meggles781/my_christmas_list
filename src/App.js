import React, { Component } from "react";
import "./App.css";
import Gift from "./Gift";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      christmasList: [
         {id: 1, giftName: "The Grinch Who Stole Christmas Book", received: true}, 
         { id: 2, giftName: "Iphone", received: false},
         { id: 3, giftName: "Gift Card", received: false},

      ],
    };
  }

  deleteGift = (id) => {
    let newchristmasList = this.state.christmasList.filter((gift) => id !== gift.id);
    this.setState({christmasList :newchristmasList });
  }

  render() {
    return (
      <div className = "App">
        <h1 className="App-title">Christmas List</h1>

        {this.state.christmasList.map((gift) => {
          return (
            <>
            <Gift gift={gift} key={gift.id} deleteGift={this.deleteGift}/>
            </>


          )
        })}
      </div>
    )
  }


}

export default App; 