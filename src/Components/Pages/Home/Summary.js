import React from "react";

const Summary = () => {
  return (
   <div className="w-11/12 mx-auto my-20">
       <h1 className="text-center text-4xl font-semibold my-10">Busness Summary</h1>
        <div className="stats shadow flex justify-center items-center gap-10">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">We Served </div>
        <div className="stat-value text-primary">100+</div>
        <div className="stat-desc">Customar</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">We have</div>
        <div className="stat-value text-secondary">120M+</div>
        <div className="stat-desc">Annual revenue</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://api.lorem.space/image/face?w=128&h=128" />
            </div>
          </div>
        </div>
        <div className="stat-value">33K+</div>
        <div className="stat-title">Reviews</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
   </div>
  );
};

export default Summary;
