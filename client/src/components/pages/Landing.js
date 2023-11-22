import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = "TaskSync Pro";
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <nav className="top">
        <h2>TaskSync Pro</h2>
        <div>
          <Button color="inherit" href="/login">
            Login
          </Button>
          <Button variant="contained" href="/register">
            Sign Up
          </Button>
        </div>
      </nav>
      <div className="landing-inner">
        <h1>TaskSync Pro</h1>
        <p>
          Empower Your <strong>Productivity</strong>: Task Management Made
          Simple.
        </p>
        <div className="buttons">
          <Button variant="outlined" color="inherit" href="/register">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
