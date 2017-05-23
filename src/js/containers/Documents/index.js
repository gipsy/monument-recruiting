import React from 'react';

const Documents = (props) =>
  (
    <div>
      <div>Documents
        <ul>
          {'Many things can go here, because it is, a comma seperated list'.split(',').map((el, i) => <li key={i}>{el}</li>)}
        </ul>
      </div>
    </div>
  )

export default Documents;
