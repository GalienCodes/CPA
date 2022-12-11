import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Members() {
  return (
    <>
    <button className="bg-gray-300 rounded-full">
  <span className="sr-only">Previous</span>
  <span aria-hidden="true" className="fas fa-arrow-left"></span>
</button>

<button className="bg-gray-300 rounded-full">
  <span className="sr-only">Next</span>
  <span aria-hidden="true" className="fas fa-arrow-right"></span>
</button>
    </>
  );
}


export default Members

// const Members = () => {
//   return (
//   <div >
//     Members
//   </div>


//   )
// }

// export default Members