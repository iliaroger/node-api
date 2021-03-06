import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function MoviesRoute() {
  const [moviesData, setMoviesData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch('/movies')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMoviesData(JSON.stringify(json, undefined, 2));
        setDataLoaded(true);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>Movies in JSON format</h3>
          <pre>
            {dataLoaded ? (
              moviesData
            ) : (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </pre>
        </div>
        <div className="col-md-12">
          <Link to="/">
            <Button style={{ marginBottom: '20px' }}>Go Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
