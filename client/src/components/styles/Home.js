import React from 'react';

const Home = () => {
  return (
    <section className='home'>
      <div className='dark-overlay'>
        <div className='home-inner'>
          <h1 className='x-large'>We Connect</h1>
          <p className='lead'>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className='buttons'>
            <a href='register.html' className='btn btn-primary'>
              Sign Up
            </a>
            <a href='login.html' className='btn btn-light'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
