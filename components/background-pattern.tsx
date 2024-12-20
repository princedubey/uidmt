import React from 'react';

const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
}

export default BackgroundPattern;