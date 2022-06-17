
import './App.scss';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Router from './Router';
import NavBar from './Components/NavBar';


import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <NavBar></NavBar>
      <Router></Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
