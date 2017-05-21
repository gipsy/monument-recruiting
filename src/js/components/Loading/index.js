import React from 'react';
import reduxify from '../../util/reduxify';

const Loading = () => (
  <div className="timelineItem">
    <ul className="animatedBackground">
      <li className="headerTop" />
      <li className="headerRight" />
      <li className="headerBottom" />
      <li className="subheaderRight" />
      <li className="subheaderBottom" />
      <li className="contentTop" />
      <li className="contentFirstEnd" />
      <li className="contentSecondLine" />
      <li className="contentSecondEnd" />
      <li className="contentThirdLine" />
      <li className="contentThirdEnd" />
    </ul>
  </div>
);

export default reduxify({}, [], Loading);
