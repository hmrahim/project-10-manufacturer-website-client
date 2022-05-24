import React from 'react';

const ReviewCard = ({review}) => {
    console.log(review);
    return (
        <div className=" bg-base-100  w-full m-4 p-4   shadow-xl rounded-lg">
          <div className="flex gap-3 items-center ">
            <div class="avatar">
              <div class="w-8 rounded">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
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
              <div class="rating rating-sm">
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                
                </div>
          }
          {
              review.rating == "2" &&
              <div class="rating rating-sm">
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                
                </div>
          }
          {
              review.rating == "3" &&
              <div class="rating rating-sm">
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                
                </div>
          }
          {
              review.rating == "4" &&
              <div class="rating rating-sm">
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                
                </div>
          }
          {
              review.rating == "5" &&
              <div class="rating rating-sm">
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                
                </div>
          }
          </div>

          <div className="flex gap-2">
            <strong>Review:</strong>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              neque eveniet distinctio, quisquam libero voluptatem labore sit
              culpa iste iure perspiciatis reiciendis ex facilis laboriosam
              nobis ratione repellat quis laborum. Consequuntur porro quia
              
            </p>
          </div>
        </div>
    );
};

export default ReviewCard;