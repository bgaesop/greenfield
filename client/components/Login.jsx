import React from 'react';
import ReactDOM from 'react-dom';
import FirstPage from './FirstPage.jsx';
import SecondPage from './FirstPage.jsx';
import Index from './Index.jsx';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  render() {
    return (
      <div>
      <h1 style={{display: 'flex'}}>
      <text style={{display: 'flex', flex: 1, textAlign: 'center', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center'}}>What's Going On Tonight?</text>
      <Link className="btn" to={{pathname:'/'}}>home</Link>
      <Link className="btn" to={{pathname:'/login'}}>login</Link>
      <Link className="btn" to={{pathname:'/signup'}}>signup</Link>
      </h1>
      </div>
    );
  }
}
export default Login;
