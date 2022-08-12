import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import Home from './components/Pages/HomePage/Home';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import BullyPage from './components/Pages/BullyPage/BullyPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import InternshipPage from './components/Pages/InternshipPage/InternshipPage';
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const { user } = useAuthContext();  //we are grabbing the user from useAuthCONTEXT

  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              exact path="/"
              element = {user ? <Home/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/about"
              element = {user ? <AboutPage/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/contact"
              element = {user ? <ContactPage/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/profile"
              element = {user ? <ProfilePage/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/bully"
              element = {user ? <BullyPage/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/internship"
              element = {user ? <InternshipPage/> : <Navigate to='/login'/>} 
            />
            <Route
              exact path="/login"
              element = {!user ? <Login/> : <Navigate to='/' />}
            />
            <Route
              exact path="/signup"
              element = {!user ? <Register/> : <Navigate to='/' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
