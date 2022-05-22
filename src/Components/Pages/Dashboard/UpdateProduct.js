import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onsubmit = (data) => {
    const formData = new FormData();
    const api = "962ac62a2f606aa060a906af6b63da38";
    const url = `https://api.imgbb.com/1/upload?key=${api}`;
    const image = data.image[0];
    const title = data.title;
    const price = data.price;
    const quantity = data.quantity;
    const minquantity = data.minquantity;
    const categorie = data.categorie;
    const desc = data.desc;
    formData.append("image", image);
    const product = {
      title,
      price,
      quantity,
      minquantity,
      categorie,
      desc,
      image,
    };

    if (!image) {
      const product = {
        title,
        price,
        quantity,
        minquantity,
        categorie,
        desc,
        
      };
      fetch(`http://localhost:5000/product/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Product uploaded succesfully!");
        });
    } else {
     
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          const image = data.data.url;
          const product = {
            title,
            price,
            quantity,
            minquantity,
            categorie,
            desc,
            image,
          };
          fetch(`http://localhost:5000/product/${id}`, {
            method: "put",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Product updated succesfully!");
            });

          //console.log(product);
        });
    }
  };
  return (
    <div className="mt-5 bg-base-300 rounded-lg w-9/12 mx-auto">
      <h1 className="text-center capitalize text-4xl font-semibold py-4">
        add items
      </h1>

      <div className="">
        <form onSubmit={handleSubmit(onsubmit)} action="">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Product title</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title is required",
                  },
                })}
              />
              <label class="label">
                {errors?.title?.type === "required" && (
                  <span class="label-text text-red-500">
                    {errors.title.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Product Price</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is required",
                  },
                })}
              />
              <label class="label">
                {errors?.price?.type === "required" && (
                  <span class="label-text text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Product Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is required",
                  },
                })}
              />
              <label class="label">
                {errors?.quantity?.type === "required" && (
                  <span class="label-text text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Minimum Order Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                {...register("minquantity", {
                  required: {
                    value: true,
                    message: "Minimum Quantity is required",
                  },
                })}
              />
              <label class="label">
                {errors?.minquantity?.type === "required" && (
                  <span class="label-text text-red-500">
                    {errors.minquantity.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Product Categorie</span>
              </label>
              <select
                class="select select-bordered w-full max-w-xs"
                {...register("categorie", {
                  required: {
                    value: true,
                    message: "Categorie is required",
                  },
                })}
              >
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <label class="label">
                {errors?.categorie?.type === "required" && (
                  <span class="label-text text-red-500">
                    {errors.categorie.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Product Image</span>
              </label>
              <input
                type="file"
                class="input input-bordered w-full max-w-xs"
                {...register("image")}
              />
            </div>
          </div>
          <div className="flex flex-col p-3">
            <label class="label">
              <span class="label-text">Product Description</span>
            </label>
            <textarea
              class="textarea textarea-bordered"
              placeholder="Bio"
              {...register("desc", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            ></textarea>
            <label class="label">
              {errors?.desc?.type === "required" && (
                <span class="label-text text-red-500">
                  {errors.desc.message}
                </span>
              )}
            </label>
          </div>
          <div className=" p-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
