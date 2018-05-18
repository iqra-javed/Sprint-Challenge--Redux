export const SUCCESS_GET_SMURFS = 'SUCCESS_GET_SMURFS';
export const SUCCESS_POST_SMURFS = 'SUCCESS_POST_SMURFS';
export const PENDING_SMURFS = 'PENDING_SMURFS';
export const ERROR_SMURFS = 'ERROR_SMURFS';

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

const getSmurf = () => {
  let smurfs = axios.get('http://localhost:3333/smurfs')
  return function(dispatch) {
    dispatch({type: PENDING_SMURFS})
    smurfs
      .then(response => {
        dispatch({type: SUCCESS_GET_SMURFS, payload: response.data })
      })
      .catch(error => {
        dispatch({type: ERROR_SMURFS, payload: 'ERROR PROCESSING SMURFS'})
      })
  }
}
