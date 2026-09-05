import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './../styles/App.css';
import { PostsProvider } from "./PostsContext";
import PostsList from "./PostsList";
import AddPostForm from "./AddPostForm";
import SinglePostPage from "./SinglePostPage";
import UsersList from "./UsersList";
import Notifications from "./Notifications";

const App = () => {
  return (
    <div className="App">
      <PostsProvider>
        <Router>
          <h1>GenZ</h1>
          <nav>
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications</Link>
          </nav>
          <Switch>
            <Route exact path="/">
              <AddPostForm />
              <PostsList />
            </Route>
            <Route path="/users">
              <UsersList />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/posts/:postId">
              <SinglePostPage />
            </Route>
          </Switch>
        </Router>
      </PostsProvider>
    </div>
  );
};

export default App;