import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Dashboard/Loading";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [minqty, setMinqty] = useState("");
  const [categorie, setCategorie] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setPrice(data.price);
        setQuantity(data.quantity);
        setMinqty(data.minquantity);
        setCategorie(data.categorie);
        setDesc(data.desc);
        setImage(data.image);
      });
  }, []);

  const updateForm = (e) => {
    e.preventDefault();
    const obj = {
      title: e.target.title.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      minquantity: e.target.minqty.value,
      categorie: e.target.categorie.value,
      desc: e.target.desc.value,
      image: e.target.image.value,
    };
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product uploaded succesfully!");
        navigate("/dashboard/allproducts")
      });
  };

  return (
    <div className="mt-5 bg-base-300 rounded-lg w-9/12 mx-auto">
      <h1 className="text-center capitalize text-4xl font-semibold py-4">
        add items
      </h1>

      <div className="">
        <form onSubmit={updateForm} action="">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Product title</span>
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                name="title"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Product Price</span>
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                name="price"
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Product Quantity</span>
              </label>
              <input
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                name="quantity"
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Minimum Order Quantity</span>
              </label>
              <input
                onChange={(e) => setMinqty(e.target.value)}
                value={minqty}
                name="minqty"
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Product Categorie</span>
              </label>
              <select
                name="categorie"
                onChange={(e) => setCategorie(e.target.value)}
                value={categorie}
                class="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <label class="label"></label>
            </div>
            <div className="flex flex-col p-3">
              <label class="label">
                <span class="label-text">Product Image</span>
              </label>
              <input
                name="image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                type="text"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex flex-col p-3">
            <label class="label">
              <span class="label-text">Product Description</span>
            </label>
            <textarea
              name="desc"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              class="textarea textarea-bordered"
              placeholder="Bio"
            ></textarea>
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
