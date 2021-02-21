import React from 'react';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Landing from './component/home/Landing'
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import movie from './component/home/movie';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={movie} />
            <Footer />
          </div>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
