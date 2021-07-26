import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import MyAccountInfo from './components/MyAccountInfo';
import AccountInfo from './components/AccountInfo';
import PersonalInfo from './components/PersonalInfo';
import SavedInfo from './components/SavedInfo'

const App=()=> {
  return (
    <Router>
      <Switch>
        <Route path='/savedInfo' component={SavedInfo} />
        <Route path='/personalInfo' component={PersonalInfo} />
        <Route path='/accountInfo' component={AccountInfo}/>
        <Route path='/' component={MyAccountInfo}/>
      </Switch>
    </Router>
  );
}

export default App;
