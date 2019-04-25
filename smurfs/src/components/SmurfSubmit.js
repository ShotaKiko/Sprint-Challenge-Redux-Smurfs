import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfSubmit extends React.Component {
  state = {
    traits: {
      name: "",
      age: "",
      height:""
    }
  };

  handleInput = e => {
    this.setState({
      traits: {
        ...this.state.traits,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.traits)
        //  this.setState({
        //     name:'',
        //     age:"",
        //     height:""
        // })
  };

  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInput}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInput}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs:state.smurfs,
    addingSmurf: state.addingSmurf,
    error:state.error
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfSubmit);