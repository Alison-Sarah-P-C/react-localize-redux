import React from 'react';

const WelcomeView = ({ translate }) => {
  return (
    <div>
      <h1>{ translate('title', { name: 'Ryan Johsnon' }) }</h1>
      <p>{ translate('body') }</p>
      <button>{ translate('click-here') }</button>
    </div>
  );
}

export default WelcomeView;