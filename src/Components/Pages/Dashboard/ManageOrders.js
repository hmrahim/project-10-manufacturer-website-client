import React from 'react';

const ManageOrders = () => {
    return (
        <div className="mt-5 bg-base-300 rounded-lg w-full mx-auto">
      <h1 className="text-center capitalize text-4xl font-semibold py-4">
        Manage Orders
      </h1>
      <div class="overflow-x-auto p-3">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">Name</th>
              <th className="text-center">email</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Product Title</th>
              <th className="text-center">Total Quantity</th>
              <th className="text-center">Image</th>
              
              <th className="text-center">Status</th>
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

export default ManageOrders;