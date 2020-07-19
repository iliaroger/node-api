import React, { useState, useEffect } from 'react';

export default function PeopleRoute() {
  const [peopleData, setPeopleData] = useState({});

  useEffect(() => {
    fetch('/people')
      .then((res) => res.json())
      .then((json) => setPeopleData(json));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>{console.log(peopleData)}</p>
        </div>
      </div>
    </div>
  );
}
