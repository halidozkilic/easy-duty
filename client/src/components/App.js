import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import GetJobs from "./views/Task/GetJobs"
import CreateJob from "./views/Task/CreateJob"
import JobDetail from "./views/Task/JobDetail"
import Profile from "./views/Users/UserProfile";
import UserDetails from "./views/Users/UserDetails";
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/getJobs" component={Auth(GetJobs, true)} />
            <Route exact path="/createJobs" component={Auth(CreateJob, true)} />
            <Route exact path="/getJobDetails/:id" component={Auth(JobDetail, true)} />
            <Route exact path="/Profile" component={Auth(Profile, true)} />
            <Route exact path="/userDetail/:id" component={Auth(UserDetails, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
