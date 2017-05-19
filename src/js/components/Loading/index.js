import React from 'react';
import reduxify from '../../util/reduxify';
import s from './style';

const Loading = () => (
  <div className={s.timelineItem}>
    <ul className={s.animatedBackground}>
      <li className={s.headerTop} />
      <li className={s.headerRight} />
      <li className={s.headerBottom} />
      <li className={s.subheaderRight} />
      <li className={s.subheaderBottom} />
      <li className={s.contentTop} />
      <li className={s.contentFirstEnd} />
      <li className={s.contentSecondLine} />
      <li className={s.contentSecondEnd} />
      <li className={s.contentThirdLine} />
      <li className={s.contentThirdEnd} />
    </ul>
  </div>
);

export default reduxify({}, [], Loading);
