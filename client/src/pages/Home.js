// import React from 'react'

// function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <header className="App-header">
        <h1 className="text-center">Welcome to BookMyShow</h1>
      </header>
      <main className="main-content inner-container">
        <section className="intro-section text-center">
          <h2>Discover Movies, Shows, and More</h2>
          <p>Experience the best entertainment at your fingertips.</p>
          <Link to="/login">
            <button className="login-button">
              Login
            </button>
          </Link>
        </section>
        {/* <section className="features-section text-center mt-3">
          <div className="feature-item">
            <h3>Latest Movies</h3>
            <p>Stay updated with the latest releases.</p>
          </div>
          <div className="feature-item mt-3">
            <h3>Exciting Shows</h3>
            <p>Watch the most popular shows and events.</p>
          </div>
          <div className="feature-item mt-3">
            <h3>Easy Booking</h3>
            <p>Book your tickets effortlessly.</p>
          </div>
        </section> */}
      </main>
      <footer className="text-center mt-3">
        <p>&copy; 2024 BookMyShow. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
