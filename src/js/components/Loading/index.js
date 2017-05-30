import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Loading = () => (
  <div className={styles.Loading__timelineItem}>
    <ul className={styles.Loading__animatedBackground}>
      <li className={styles.Loading__headerTop} />
      <li className={styles.Loading__headerRight} />
      <li className={styles.Loading__headerBottom} />
      <li className={styles.Loading__subheaderRight} />
      <li className={styles.Loading__subheaderBottom} />
      <li className={styles.Loading__contentTop} />
      <li className={styles.Loading__contentFirstEnd} />
      <li className={styles.Loading__contentSecondLine} />
      <li className={styles.Loading__contentSecondEnd} />
      <li className={styles.Loading__contentThirdLine} />
      <li className={styles.Loading__contentThirdEnd} />
    </ul>
  </div>
);

const styles = StyleSheet.create({
  '@-webkit-keyframes placeHolderShimmer': {
    '0%': {
      backgroundPosition: '-468px 0'
    },
    
    '100%': {
      backgroundPosition: '468px 0'
    }
  },

  '@keyframes placeHolderShimmer': {
    '0%': {
      backgroundPosition: '-468px 0'
    },

    '100%': {
      backgroundPosition: '468px 0'
    }
  },

  Loading__timelineItem: {
    background: '#fff',
    border: '1px solid',
    borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
    borderRadius: '3px',
    padding: '12px',
    margin: '0 auto',
    minHeight: '200px',
    minWidth: '300px',
    maxWidth: '472px',
    width: '90vw',
    boxShadow: '0 1px 4px rgba(0, 0, 0, .16)'
  },

  Loading__animatedBackground: {
    animationDuration: '1s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    background: '#f6f7f8',
    backgroundSize: '800px 104px',
    height: '96px',
    position: 'relative',
    listStyle: 'none'
  },

  Loading__listItem: {
    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box',
  },

  Loading__headerTop: {
    top: '0',
    left: '0',
    right: '0',
    height: '10px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box'
  },

  Loading__headerBottom: {
    top: '18px',
    left: '0',
    right: '0',
    height: '6px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box'
  },

  Loading__subheaderBottom: {
    top: '0',
    left: '0',
    right: '0',
    height: '10px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box'
  },

  Loading__headerRight: {
    top: '10px',
    left: '40px',
    height: '8px',
    width: '10px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box'
  },

  Loading__subheaderRight: {
    top: '24px',
    left: '230px',
    height: '6px',
    width: '10px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box'
  },

  Loading__headerRight: {
    width: 'auto',
    left: '300px',
    right: '0',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box',
  },

  Loading__contentTop: {
    top: '40px',
    left: '0',
    right: '0',
    height: '20px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box',
  },

  Loading__contentSecondLine: {
    top: '68px',
    left: '0',
    right: '0',
    height: '6px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box',
  },

  Loading__contentThirdLine: {
    top: '82px',
    left: '0',
    right: '0',
    height: '6px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box',
  },

  Loading__contentSecondEnd: {
    top: '74px',
    left: '420px',
    right: '0',
    height: '6px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box',
  },

  Loading__contentThirdEnd: {
    top: '88px',
    left: '300px',
    right: '0',
    height: '6px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box',
  },

  Loading__contentDirstEnd: {
    top: '40px',
    left: '0',
    right: '0',
    height: '6px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box',
  },

  Loading__contentFirstEnd: {
    width: 'auto',
    left: '380px',
    right: '0',
    top: '60px',
    height: '8px',

    background: '#fff',
    position: 'absolute',
    boxSizing: 'border-box'
  },

});

export default Loading;
