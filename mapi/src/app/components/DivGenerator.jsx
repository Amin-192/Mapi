import React from 'react';

const DivGenerator = () => {
  // Generate an array with 200 elements
  const divsArray = Array.from({ length:200 }, (_, index) => index + 1);

  return (
    <div >
      {divsArray.map((number) => (
        <div key={number} className="generated-div h-screen">
          Div {number}
        </div>
      ))}
    </div>
  );
};

export default DivGenerator;