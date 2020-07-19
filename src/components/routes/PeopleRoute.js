import React, { useState, useEffect } from 'react';

export default function PeopleRoute() {
  const [peopleData, setPeopleData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch('/people')
      .then((res) => res.json())
      .then((json) => {
        setPeopleData(JSON.stringify(json, undefined, 2));
        setDataLoaded(true);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>People data in JSON format</h3>
          <pre>{dataLoaded ? peopleData : null}</pre>
        </div>
      </div>
    </div>
  );
}
