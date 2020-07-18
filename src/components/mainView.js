import React from 'react';

export default function mainView() {
  return (
    <>
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
                <a href="/people">/people </a> -{'>'} Fetch 20 people with
                multiple data endpoints
              </p>
            </span>
            <span>
              <p>
                {' '}
                <a href="/stocks">/images </a> -{'>'} Fetch 20 random
                non-copyrighted images
              </p>
            </span>
            <span>
              <p>
                {' '}
                <a href="/cities">/cities </a> -{'>'} Fetch 30 cities with
                multiple data endpoints
              </p>
            </span>
            <span>
              <p>
                {' '}
                <a href="/articles">/articles </a> -{'>'} Fetch 30 random
                articles from Wikipedia.org
              </p>
            </span>
            <span>
              <p>
                {' '}
                <a href="/comments">/comments </a> -{'>'} Fetch 50 comments made
                by artists and philosophers
              </p>
            </span>
            <span>
              <p>
                {' '}
                <a href="/movies">/movies </a> -{'>'} Fetch 50 movies ranging
                from comedy to thrillers
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
            <br></br> It is not recommended to use this API for any production
            projects.
          </h5>
          <br></br>
          <p>
            Made with Express and MySQL with{' '}
            <span role="img" aria-label="heart emoji">
              &#128150;
            </span>{' '}
          </p>
        </div>
      </div>
    </>
  );
}
