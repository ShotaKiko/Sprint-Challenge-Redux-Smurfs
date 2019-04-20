import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const fetchSmurfList = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_SUCCESS })
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: console.log(res) }))
    .catch( err => dispatch ({ type: FETCH_SMURFS_FAILURE, payload: console.log(err) }))
}




/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
