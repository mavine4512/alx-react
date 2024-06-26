import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notification from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import "./App.css";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];
const listNotifications = [
  { id: 1, name: "default", value: "New course available" },
  { id: 2, name: "urgent", value: "New resume available" },
  { id: 3, name: "urgent", html: getLatesNotification() },
];
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <div className="App">
        <div className="heading-section">
          <Notification listNotifications={listNotifications} />
          <Header />
        </div>
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
