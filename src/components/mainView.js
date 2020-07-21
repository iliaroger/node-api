import React from 'react';
import { Link } from 'react-router-dom';

export default function MainView() {
  return (
    <>
      <div className="backgroundWrapper">
        <div className="container mainContainer">
          <div className="row topViewRow">
            <div className="col-md-12">
              <h1>
                Placeholder API{' '}
                <span role="img" aria-label="tiger emoji">
                  &#129409;
                </span>
              </h1>
              <h4>Quick data fetching for testing</h4>
            </div>
          </div>
          <div className="row mainViewRow">
            <div className="col-md-6 mainViewRoutes">
              <h3>All Routes - GET Requests / JSON</h3>
              <br></br>
              <div className="routeWrapper">
                <span>
                  <p>
                    {' '}
                    <a href="/articles">/articles </a> -{'>'} Fetch 10 random
                    articles from Wikipedia.org
                  </p>
                </span>
                <span>
                  <p>
                    {' '}
                    <a href="/cities">/cities </a> -{'>'} Fetch 10 cities with
                    multiple data endpoints
                  </p>
                </span>
                <span>
                  <p>
                    {' '}
                    <a href="/comments">/comments </a> -{'>'} Fetch 10 comments
                    made by artists and philosophers
                  </p>
                </span>
                <span>
                  <p>
                    {' '}
                    <a href="/stocks">/images </a> -{'>'} Fetch 10 random
                    non-copyrighted images
                  </p>
                </span>
                <span>
                  <p>
                    {' '}
                    <a href="/movies">/movies </a> -{'>'} Fetch 10 movies
                    ranging from comedy to thrillers
                  </p>
                </span>
                <span>
                  <p>
                    <Link to="/people">/people </Link>-{'>'} Fetch 10 people
                    with multiple data endpoints
                  </p>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/images/serverImage.svg" alt="server"></img>
            </div>
          </div>
          <div className="row footer">
            <div className="col-md-12">
              <h5>
                Feel free to use this API for quick data fetching and testing.{' '}
                <br></br> It is not recommended to use this API for any
                production projects.
              </h5>
              <br></br>
              <p>
                Made with Express and SQL with{' '}
                <span role="img" aria-label="heart emoji">
                  &#128150;
                </span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
