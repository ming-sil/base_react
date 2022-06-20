import { Component } from "react";

export class ClassEvent extends Component {
  state = {
    num: 0,
  };
  render() {
    const handlePlus = () => {
      this.setState({
        num: this.state.num + 1,
      });
    };

    const handleMinus = () => {
      this.setState({
        num: this.state.num - 1,
      });
    };

    return (
      <>
        <h3> {this.state.num} </h3>
        <button onClick={handlePlus}> + </button>
        <button onClick={handleMinus}> - </button>
      </>
    );
  }
}
