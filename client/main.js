import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import ResolutionForm from './components/resolutionsForm.js';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>My Resolutions</h1>
        <ResolutionForm />
      </div>
    )
  }
}

export default App;
/*
Meteor.startup(() => {
  render(<App />, document.getElementById('App'));
});
*/