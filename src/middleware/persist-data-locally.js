const persistDataLocally = store => next => action => {
  return next(action)
  localStorage['reduxStore'] = JSON.stringify(store.getState());
  console.log('Local Storage', localStorage['reduxStore']);
}

export default persistDataLocally;
