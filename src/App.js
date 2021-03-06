import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import AuthProvide from './Context/AuthProvide';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import Gallery from './Pages/Gallery/Gallery';
import ServiceDetail from './Pages/Detail/ServiceDetail';
import DoctorDetail from './Pages/Detail/DoctorDetail';

function App() {
  return (
    <div className="App">
      <AuthProvide>
        <Router>
          <div className="contents">
            <div className="header">
              <Header></Header>
            </div>
            <div className="container routes">
              <Switch>
                <Route exact path='/'>
                  <Home></Home>
                </Route>
                <Route path='/home'>
                  <Home></Home>
                </Route>
                <PrivateRoute path='/services'>
                  <Services></Services>
                </PrivateRoute>
                <PrivateRoute path='/doctors'>
                  <Doctors></Doctors>
                </PrivateRoute>
                <Route path='/gallery'>
                  <Gallery />
                </Route>
                <Route path='/contact'>
                  <Contact></Contact>
                </Route>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                <Route exact path='/servicedetail/:srvId'>
                  <ServiceDetail></ServiceDetail>
                </Route>
                <Route exact path='/doctordetail/:docId'>
                  <DoctorDetail></DoctorDetail>
                </Route>
                <Route path='*'>
                  <NotFound></NotFound>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
        <div className="footer">
          <Footer></Footer>
        </div>
      </AuthProvide>
    </div >
  );
}
export default App;
