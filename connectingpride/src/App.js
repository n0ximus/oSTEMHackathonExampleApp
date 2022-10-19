import './App.css';
import NavBar from './components/navbar/navbar'
import Home from './pages/home/home'
import PostPage from './pages/postPage/postPage'
import CreateAccount from './pages/createAccount/CreateAccount'
import Login from  './pages/login/Login'
import Settings from  './pages/settings/Settings'
import WritePost from  './pages/writePost/writePost'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WritePost/>

    </div>
  );
}

export default App;
