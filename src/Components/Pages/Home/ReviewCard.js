import React from 'react';
import noimage from "../../../images/no-image.jpg"

const ReviewCard = ({review}) => {
    // console.log(review);
    return (
        <div className=" bg-base-100  w-full m-4 p-4   shadow-xl rounded-lg">
          <div className="flex gap-3 items-center ">
            <div className="avatar">
              <div className="w-8 rounded">
                <img
                  src={noimage}
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <h1 className="font-semibold text-xl">{review.name}</h1>
          </div>
          <div className="my-2 flex items-center gap-2">
            <strong>Ratings: </strong>
          {
              review.rating == "1" &&
              <div className="rating rating-sm">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                
                </div>
          }
          {
              review.rating == "2" &&
              <div className="rating rating-sm">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                
                </div>
          }
          {
              review.rating == "3" &&
              <div className="rating rating-sm">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                
                </div>
          }
          {
              review.rating == "4" &&
              <div className="rating rating-sm">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                
                </div>
          }
          {
              review.rating == "5" &&
              <div className="rating rating-sm">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                
                </div>
          }
          </div>

          <div className="flex gap-2">
            <strong>Review:</strong>{" "}
            <p>
             {review.review}
            </p>
          </div>
        </div>
    );
};

export default ReviewCard;