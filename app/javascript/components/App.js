import React from "react";
import ReactDOM from 'react-dom';
// import Form from './Form.js';
// import UserList from './UserList.js';
// import GetUserDetailsStore from "../stores/GetUserDetailsStore.jsx";
import Album from './album.js';
// import Dialog from '@material-ui/core/Dialog';



class App extends React.Component {
 //  // constructor(props){
 //  //   super(props);
 //  state = getAppState();
 //  //_onChange = this._onChange.bind(this);
  
  
  
	// // addUserDetails = (userDetailsFromResponse) => {
	// // 	this.setState({userDetails: this.state.userDetails.concat(userDetailsFromResponse)})
	// // }

 //  componentDidMount = () => {    
 //    console.log("component did mount called ");
 //    GetUserDetailsStore.addChangeListener(this._onChange);
 //  }

 //  componentWillUnmount = () => {
 //     console.log("component will un mount called ");
 //    GetUserDetailsStore.removeChangeListener(this._onChange);
 //  }

 //  _onChange = () => {  
 //  console.log("On change called");   
 //    this.setState(getAppState());
 //  }

  render () {
    return (
      <div>  
        <Album />                     
      </div>
    );
  }
}


export default App;