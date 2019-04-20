import React, { Component } from 'react';

import { connect } from 'react-redux'
import { fetchSmurfList } from '../actions'
import VillageList from './VillageList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class ViewVillage extends Component {
    constructor() {
        super();
    }

  componentDidMount() {
    this.props.fetchSmurfList();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      <h3>Loading smurf list...</h3>
    }
    return (
      <div>
        <VillageList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,

  } 
};
console.log(this.smurfs)

export default connect(
  mapStateToProps,
  { fetchSmurfList }
)(ViewVillage);
