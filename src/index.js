import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, browserHistory } from 'react-route';
//import { Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
//import { Provider } from 'react-redux';
//import { createStore} from 'redux';
import reducers from './reducers';

//const store = createStore(reducers); 

// ReactDOM.render(
//     (<Router> 
//         <Switch>
//             <Route path="/" component={App} />
//             <Route path="/signin" component={SignIn} />
//             <Route path="/signup" component={SignUp} />
//             <Route path="/forgotpassword" component={ForgotPassword} /> 
//         </Switch>         
//     </Router>),
//     document.getElementById("root"));

ReactDOM.render(
    (<Router> 
        <div>
            <ul>
                <Route path="/" component={App} />
                <Link to="/signin" component={SignIn} />
                <Link to="/signup" component={SignUp} />
                <Link to="/forgotpassword" component={ForgotPassword} /> 
            </ul>            
        </div>         
    </Router>),
    document.getElementById("root"));
