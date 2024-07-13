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
              Log Out
            </button>
          </Link>
        </section>
      </main>
      <footer className="text-center mt-3">
        <p>&copy; 2024 BookMyShow. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
