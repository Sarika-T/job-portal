import React from 'react';
import Blocker from './Blocker';

const Message = () => {
  Blocker('Are you sure you want to leave?');

  return (
    <div>
      <h1>Alert</h1>
      <p>Try to navigate away from this page to see the alert.</p>
    </div>
  );
};

export default Message;


