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
          <h1>Routes</h1>
          <br></br>
          <span>
            <a href="/people">/people </a>
            <p> - Fetch 10 people with multiple </p>
          </span>
        </div>
        <div className="col-md-6">
          <img src="/images/serverImage.svg" alt="server"></img>
        </div>
      </div>
      <div className="row footer">
        <div className="col-md-12">
          <h5>
            Feel free to use this API for quick data fetching and testing.{' '}
            <br></br> It is not recommended to use this API for production
            projects of any type or form.
          </h5>
        </div>
      </div>
    </>
  );
}
