import React from 'react';
// import data from './data';
// import MovieList from './components/movies/list';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PostsList from './components/posts/list';
import DisplayPost from './components/posts/display';
import AddPost from './components/posts/add';
import DisplayComment from './components/posts/DisplayComment';


import UsersList from './components/users/list';
import DisplayUser from './components/users/displayuserDetails';
import AddUser from './components/users/add';
import DisplayUserPosts from './components/users/displayUserpost';


import Home from './components/home';



import './App.css';


const App = (props) => {
  return (



    <Router>
      <>

        <div className="nav">
          <Link to="/" className="link"> <h1> Home </h1> </Link>
          <Link to="/posts" className="link"> <h1> Posts </h1> </Link>
          <Link to="/users" className="link"> <h1> users </h1> </Link>
        </div>

        <Route exact path="/" component={Home} />

        <Route exact path="/posts" component={PostsList} />
        <Route exact path="/posts/:id" component={DisplayPost} />
        <Route exact path="/addpost" component={AddPost} />
        <Route exact path="/comments/:id" component={DisplayComment} />



        <Route exact path="/users" component={UsersList} />
        <Route exact path="/users/:id" component={DisplayUser} />
        <Route exact path="/users/:id/posts" component={DisplayUserPosts} />
        <Route exact path="/adduser" component={AddUser} />

      </>


    </Router>




    //  <MovieList data={data} />
  )
}

export default App;
