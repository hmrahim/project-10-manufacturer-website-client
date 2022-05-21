import React from "react";
import img from "../../../images/5124556-removebg-preview.png";

const ClientMessage = () => {
  return (
    <div className="bg-base-300 my-10 ">
        <h1 className="text-center text-4xl font-semibold capitalize py-5">Send Your message</h1>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row p-5">
        <div className="w-full">
          <img src={img} alt="" />
        </div>
        <div className="w-full">
          <form action="">
            <div className=" grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">What is your first name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your first name"
                  class="input input-bordered w-full "
                />
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">What is your last name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your last name"
                  class="input input-bordered w-full "
                />
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">What is your email?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your email"
                  class="input input-bordered w-full "
                />
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">What is your phone?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your phone"
                  class="input input-bordered w-full "
                />
              </div>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">What is your message?</span>
              </label>
              <textarea
                class="textarea textarea-bordered"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn btn-primary my-4">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientMessage;
