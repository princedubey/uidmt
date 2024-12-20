import React from 'react';

const GradientBlob: React.FC = () => {
  return (
    <div className="absolute top-0 right-3 w-[300px] h-[300px] filter blur-[50px] opacity-70 animate-blob">
      <div className="absolute -top-10 -left-8 inset-0 bg-gradient-to-r from-purple-700 via-blue-900 to-indigo-400 rounded-full mix-blend-normal animate-blob-spin" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mix-blend-normal animate-blob-morph" />
    </div>
  );
};

export default GradientBlob;