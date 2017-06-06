import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';

const LoadingSpinner = () => (
  <div className='LoadingSpinner__Wrap'>
    <svg className='LoadingSpinner' width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'>
      <circle className='LoadingSpinner__Circle' cx='7' cy='15' r='4' />
      <circle className='LoadingSpinner__Circle' cx='30' cy='15' r='4' />
      <circle className='LoadingSpinner__Circle' cx='53' cy='15' r='4' />
    </svg>
  </div>
);

const translateKeyframes = {
  '0%': {
      transform: 'translateY(0)',
      opacity: 0
  },

  '25%': {
      transform: 'translateY(-10px)',
      opacity: 1
  },

  '75%': {
      transform: 'translateY(-10px)',
      opacity: 1
  },

  '100%': {
      transform: 'translateY(0)',
      opacity: 0
  },
};

const styles = StyleSheet.create({

  LoadingSpinner__Wrap: {
    width: '100%',
    padding: '50px 0',
  },

  LoadingSpinner: {
    display: 'block',
    margin: '0 auto',
    fill: '#000',


    LoadingSpinner__Circle: {
      animationName: [translateKeyframes],
      animationDuration: '2s',
      animationTimingFunction: 'cubic-bezier(.05, .2, .35, 1)',
      animationIterationCount: 'infinite',

      ':nth-child(2)': {
        animationDelay: '.18s',
      },

      ':nth-child(3)': {
        animationDelay: '.36s',
      }
    }
  },

});

export default LoadingSpinner;
