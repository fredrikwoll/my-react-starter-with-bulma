import React, {Component} from "react";

import axios from "axios";

class App extends Component {

  // default State object
  state = {
    contacts: []
  };

  componentDidMount() {
axios
  .get("http://localhost/digtaldata/login/login.php?username=dev&password=hash")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;