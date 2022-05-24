import React from 'react';

const AllReviews = () => {
    return (
        <div className="mt-5 bg-base-300 rounded-lg w-full mx-auto">
      <h1 className="text-center capitalize text-4xl font-semibold py-4">
        All items
      </h1>
      <div class="overflow-x-auto p-3">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Review</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
         

            {/* <!-- row 2 --> */}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllReviews;