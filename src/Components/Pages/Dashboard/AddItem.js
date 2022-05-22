import React from "react";

const AddItem = () => {
  return (
    <div className="mt-5 bg-base-300 rounded-lg w-9/12 mx-auto">
      <h1 className="text-center capitalize text-4xl font-semibold py-4">
        add items
      </h1>

      <div className="">
        <form action="">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col p-3">
              <label htmlFor="">Product Title</label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col p-3">
              <label htmlFor="">Product Price</label>
              <input
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col p-3">
              <label htmlFor="">Product Quantity</label>
              <input
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col p-3">
              <label htmlFor="">Minimum Order Quantity</label>
              <input
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col p-3">
              <label htmlFor="">Product Categorie</label>
              <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="flex flex-col p-3">
              <label htmlFor="">Product Image</label>
              <input type="file" class="input input-bordered w-full max-w-xs" />
            </div>
          </div>
          <div className="flex flex-col p-3">
              <label htmlFor="">Description</label>
              <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
            </div>
          <div className=" p-3">
          <button className="btn btn-primary">Submit</button>
            </div>
          

        </form>
      </div>
    </div>
  );
};

export default AddItem;
