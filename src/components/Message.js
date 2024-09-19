import React from 'react';

const Message = ({ variant, children }) => {
  return (
    <div className={`alert alert-${variant}`}>
      {children}
    </div>
  );
};

// Default variant to 'info' if not provided
Message.defaultProps = {
  variant: 'info',
};

export default Message;
