import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddItem = () => {
    const {register,formState:{errors},handleSubmit,reset} = useForm()
    const onsubmit = (data)=> {
        const formData = new FormData()
        const api = '962ac62a2f606aa060a906af6b63da38'
        const url = `https://api.imgbb.com/1/upload?key=${api}`
        const image = data.image[0]
        const title = data.title
        const price = data.price
        const quantity = data.quantity
        const minquantity = data.minquantity
        const categorie = data.categorie
        const desc = data.desc
        
        FormData.append("image",image)
        fetch(url,{
          method:"POST",
          body:formData
        })
        .then(res=> res.json())
        .then(data=> {
          const image = data.data.url
          const product = {
            title,price,quantity,minquantity,categorie,desc,image
          }

          fetch("https://protected-peak-92782.herokuapp.com/product",{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(product)
          })
          .then(res=>res.json())
          .then(data=> {
         
            toast.success("Product uploaded succesfully!")
            reset()
          })
          //console.log(product);


        })


    }
  return (
    <div className="mt-5 bg-base-100 rounded-lg md:w-9/12 w-full pb-20 md:pb-0 mx-auto">
      <h1 className="text-center capitalize text-4xl font-semibold py-4">
        add items
      </h1>

      <div className="">
        <form  onSubmit={handleSubmit(onsubmit)} action="">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col p-3">
              <label className="label">
                <span className="label-text">Product title</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                
                {...register("title",{
                    required:{
                        value:true,
                        message:"Title is required"
                    }
                })}

              />
              <label className="label">
                  {errors?.title?.type === "required" &&  <span className="label-text text-red-500">{errors.title.message}</span>}
               
              </label>
            </div>
            <div className="flex flex-col p-3">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
                {...register("price",{
                    required:{
                        value:true,
                        message:"Price is required"
                    }
                })}
              />
              <label className="label">
              {errors?.price?.type === "required" &&  <span className="label-text text-red-500">{errors.price.message}</span>}
              </label>
            </div>
            <div className="flex flex-col p-3">
            <label className="label">
                <span className="label-text">Product Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
                {...register("quantity",{
                    required:{
                        value:true,
                        message:"Quantity is required"
                    }
                })}
              />
              <label className="label">
              {errors?.quantity?.type === "required" &&  <span className="label-text text-red-500">{errors.quantity.message}</span>}
              </label>
            </div>
            <div className="flex flex-col p-3">
            <label className="label">
                <span className="label-text">Minimum Order Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
                {...register("minquantity",{
                    required:{
                        value:true,
                        message:"Minimum Quantity is required"
                    }
                })}
              />
              <label className="label">
              {errors?.minquantity?.type === "required" &&  <span className="label-text text-red-500">{errors.minquantity.message}</span>}
              </label>
            </div>
            <div className="flex flex-col p-3">
            <label className="label">
                <span className="label-text">Product Categorie</span>
              </label>
              <select className="select select-bordered w-full "
               {...register("categorie",{
                required:{
                    value:true,
                    message:"Categorie is required"
                }
            })}
              >
                <option disabled selected>
                  Who shot first?
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Electric">Electric</option>
             
              </select>
              <label className="label">
              {errors?.categorie?.type === "required" &&  <span className="label-text text-red-500">{errors.categorie.message}</span>}
              </label>
            </div>
            <div className="flex flex-col p-3">
            <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input 
              type="file" 
              className="input input-bordered w-full "
              {...register("image",{
                required:{
                    value:true,
                    message:"Image is required"
                }
            })}
               />
              <label className="label">
              {errors?.image?.type === "required" &&  <span className="label-text text-red-500">{errors.image.message}</span>}
              </label>
            </div>
          </div>
          <div className="flex flex-col p-3">
          <label className="label">
                <span className="label-text">Product Description</span>
              </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Bio"
              {...register("desc",{
                required:{
                    value:true,
                    message:"Image is required"
                }
            })}

            ></textarea>
            <label className="label">
            {errors?.desc?.type === "required" &&  <span className="label-text text-red-500">{errors.desc.message}</span>}
              </label>
          </div>
          <div className=" p-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
