import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSchool,
  faPen,
  faGraduationCap,
  faBuildingColumns,
  faEnvelope,
  faLocationPin,
  faMap,
  faMobile
} from "@fortawesome/free-solid-svg-icons";
import image from "../../../images/my-image.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const element = <FontAwesomeIcon icon={faSchool} />;
  return (
    <div className="w-full   mx-auto px-6 md:px-0 ">
      <div className="p-5 bg-base-300   my-5 w-full my-5  md:w-9/12  rounded-lg  mx-auto">
        <div className="flex flex-col md:flex-row  justify-center md:justify-start items-center md:items-start  ">
          <div className="md:w-3/12 flex flex-col justify-center items-center">
            <div class="avatar  ">
              <div class="md:w-36 w-36 border-2 rounded-xl">
                <img src={image} />
              </div>
            </div>

            <h1 className="uppercase  select-none text-2xl font-semibold text-center md:text-left bg-info p-3 m-2 rounded-full">
              Hm rahim
            </h1>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:w-9/12 px-5 border m-3">
            <div className="grid md:grid-cols-2 grid-cols-1 ">
              <div>
                <h1 className="capitalize text-2xl font-semibold underline p-2">
                  education
                </h1>
                <div className="my-3">
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">
                      <FontAwesomeIcon icon={faSchool} />
                    </strong>
                    SSC : Merasani Polytecnic academy
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">
                      <FontAwesomeIcon icon={faPen} />
                    </strong>
                    HSC: kazi Mohammad Shafiqul Islam University College.
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </strong>
                    Honourse: Bsc In Zoology From Brindabon Govt: College,
                    Hobibiganj,Sylhet.{" "}
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">
                      <FontAwesomeIcon icon={faBuildingColumns} />
                    </strong>
                    University: National University.{" "}
                  </p>
                </div>
              </div>

              <div>
                <h1 className="capitalize text-2xl font-semibold underline p-2">
                  Address
                </h1>
                <div className="my-3">
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </strong>
                    E-mail: h.m.rahimnet@gmail.com{" "}
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">
                      <FontAwesomeIcon icon={faMobile} />
                    </strong>
                    Phone: 01886463596
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">
                      <FontAwesomeIcon icon={faLocationPin} />
                    </strong>
                    Address: Singerbill , Bijaynagar,Brahmanbaria
                  </p>
                 
                </div>
              </div>
              <div>
                <h1 className="capitalize text-2xl font-semibold underline p-2">
                  Skills
                </h1>
                <div className="my-3">
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">1.</strong>HTML5
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">2.</strong>CSS3
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">3.</strong>JavaScript
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">4.</strong>JavaScript-ES6
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">5.</strong>ReactJs
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">6.</strong>NodeJs
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">7.</strong>ExpressJs
                  </p>
                  <p className="text-[16px] my-4">
                    <strong className="mr-2">8.</strong>MongoDb
                  </p>
                </div>
              </div>
              <div>
                <h1 className="capitalize text-2xl font-semibold underline p-2">
                  Projects
                </h1>
                <div className="my-3 grid grid-cols-1 gap-5">


                  <div className="flex gap-3 bg-info rounded-md cursor-pointer">
                    <div class="avatar ">
                      <div class="w-20 rounded rounded-r-none">
                        <img
                          src="https://i.ibb.co/Yyxf1K5/Screenshot-2022-05-25-214543.png"
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">Falcon Electronics.</h1>
                      <h2 className="font-semibold">Full stack Application</h2>
                      <a target="_blank" href="https://falcon-electronics.web.app/" className="text-blue-500 hover:underline">Live Website Link</a>
                    </div>
                  </div>
                 
                  <div className="flex gap-3 bg-info rounded-md cursor-pointer">
                    <div class="avatar ">
                      <div class="w-20 rounded rounded-r-none">
                        <img
                          src="https://i.ibb.co/LtDMWSz/Screenshot-2022-05-25-214854.png"
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">B.baria fruit house.</h1>
                      <h2 className="font-semibold">Full stack Application</h2>
                      <a target="_blank" href="https://warehouse-c7200.web.app/" className="text-blue-500 hover:underline">Live Website Link</a>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-info rounded-md cursor-pointer">
                    <div class="avatar ">
                      <div class="w-20 rounded rounded-r-none">
                        <img
                          src="https://i.ibb.co/HpsZhv7/Screenshot-2022-05-25-215422.png"
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">Hitup fitness center.</h1>
                      <h2 className="font-semibold">React Application</h2>
                      <a target="_blank" href="https://warehouse-c7200.web.app/" className="text-blue-500 hover:underline">Live Website Link</a>
                    </div>
                  </div>
               
                


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
