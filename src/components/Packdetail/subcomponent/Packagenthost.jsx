import React, { useState } from "react";
import { Compearimg, Ratinginner } from "../../../assets/images";

const Packagenthost = () => {
  const [activeStars, setActiveStars] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStarClick = (index) => {
    const updatedStars = activeStars.map((_, i) => i <= index);
    setActiveStars(updatedStars);
  };
  return (
    <section className="section-rating">
        <div className="rating">
          <div className="container">
            <div className="rating-main">
              <div className="inner-flexleft">
                <div className="leftflex-main">
                  <div className="inn-img">
                    <span>
                      <img src={Ratinginner} alt="" />
                    </span>
                  </div>
                  <div className="rat-cunt">
                    <p> Agent & your Host </p>
                    <h3> Md. Sharifsudeen kalf </h3>
                    <div className="rat-svg">
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.38512 3.979C10.034 4.10503 10.6304 4.42096 11.0978 4.88636C11.5653 5.35175 11.8827 5.94544 12.0093 6.59143M9.38512 1.3335C10.7333 1.48259 11.9904 2.08361 12.9501 3.03786C13.9099 3.99212 14.5152 5.24289 14.6666 6.58481M6.84533 9.17943C6.04707 8.38474 5.41675 7.48617 4.95437 6.52742C4.9146 6.44496 4.89471 6.40373 4.87943 6.35155C4.82514 6.16613 4.86414 5.93845 4.97709 5.78141C5.00887 5.73723 5.04684 5.69943 5.12278 5.62382C5.35504 5.3926 5.47117 5.27699 5.54709 5.16074C5.83342 4.72232 5.83342 4.15712 5.54709 3.7187C5.47117 3.60244 5.35504 3.48683 5.12278 3.25561L4.99332 3.12673C4.64026 2.77525 4.46373 2.59951 4.27414 2.50404C3.89709 2.31418 3.4518 2.31418 3.07475 2.50404C2.88516 2.59951 2.70863 2.77525 2.35557 3.12673L2.25084 3.23099C1.89899 3.58127 1.72307 3.75641 1.5887 3.99452C1.43961 4.25875 1.33241 4.66912 1.33332 4.97218C1.33413 5.24529 1.38735 5.43195 1.49378 5.80526C2.06576 7.81147 3.14497 9.70456 4.73141 11.2839C6.31784 12.8633 8.21943 13.9377 10.2346 14.5071C10.6096 14.613 10.7971 14.666 11.0715 14.6668C11.3759 14.6677 11.7881 14.561 12.0535 14.4126C12.2927 14.2788 12.4686 14.1037 12.8205 13.7534L12.9252 13.6491C13.2782 13.2977 13.4548 13.1219 13.5507 12.9332C13.7414 12.5578 13.7414 12.1145 13.5507 11.7391C13.4548 11.5504 13.2782 11.3747 12.9252 11.0232L12.7957 10.8943C12.5635 10.6631 12.4473 10.5475 12.3306 10.4719C11.8902 10.1868 11.3224 10.1868 10.8821 10.4719C10.7653 10.5475 10.6492 10.6631 10.4169 10.8943C10.341 10.9699 10.303 11.0077 10.2586 11.0393C10.1009 11.1518 9.87215 11.1906 9.6859 11.1365C9.63349 11.1213 9.59207 11.1015 9.50924 11.0619C8.54619 10.6016 7.64359 9.97413 6.84533 9.17943Z"
                            stroke="#007AFF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <p> +971 55 327 9516 </p>
                    </div>
                    <div className="rat-svg ratphone">
                      <span>
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.75 2.875L5.85307 6.44715C6.26631 6.73641 6.47292 6.88105 6.69766 6.93707C6.89618 6.98655 7.10382 6.98655 7.30234 6.93707C7.52708 6.88105 7.73369 6.73641 8.14692 6.44715L13.25 2.875M3.75 11H10.25C11.3001 11 11.8251 11 12.2262 10.7956C12.579 10.6159 12.8659 10.329 13.0456 9.97623C13.25 9.57515 13.25 9.0501 13.25 8V4C13.25 2.9499 13.25 2.42485 13.0456 2.02377C12.8659 1.67096 12.579 1.38413 12.2262 1.20436C11.8251 1 11.3001 1 10.25 1H3.75C2.6999 1 2.17485 1 1.77377 1.20436C1.42096 1.38413 1.13413 1.67096 0.954363 2.02377C0.75 2.42485 0.75 2.9499 0.75 4V8C0.75 9.0501 0.75 9.57515 0.954363 9.97623C1.13413 10.329 1.42096 10.6159 1.77377 10.7956C2.17485 11 2.6999 11 3.75 11Z"
                            stroke="#007AFF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <p> sharifsudeen@gmail.com </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inner-flexright">
                <div className="feedback-cmain">
                  <div className="fixrit-innermain">
                    <div className="rightmain">
                      <div className="rightbox-main">
                        <div className="ratmain">
                          <p> Rating </p>
                        </div>
                        <div className="ratstar">
                          <span>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.37171 0.609964C8.54251 0.199318 9.12424 0.199318 9.29503 0.609964L11.3611 5.57744C11.4331 5.75056 11.5959 5.86885 11.7828 5.88383L17.1456 6.31376C17.589 6.3493 17.7687 6.90256 17.431 7.19189L13.3451 10.6919C13.2027 10.8139 13.1405 11.0053 13.184 11.1876L14.4323 16.4208C14.5355 16.8534 14.0649 17.1954 13.6853 16.9635L9.094 14.1592C8.93399 14.0615 8.73275 14.0615 8.57275 14.1592L3.98143 16.9635C3.60188 17.1954 3.13126 16.8534 3.23445 16.4208L4.48276 11.1876C4.52626 11.0053 4.46408 10.8139 4.32168 10.6919L0.235787 7.19189C-0.101981 6.90256 0.0777816 6.3493 0.521109 6.31376L5.88392 5.88383C6.07081 5.86885 6.23362 5.75056 6.30562 5.57744L8.37171 0.609964Z"
                                fill="#D4AF37"
                              />
                            </svg>
                          </span>
                          <h1> 3.5 </h1>
                        </div>
                      </div>
                      <div className="rightbox-main feedrevi">
                        <div className="ratmain">
                          <p> Reviews </p>
                          <span>
                            <svg
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 9L5 5L1 1"
                                stroke="#D4AF37"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="rnumrat">
                          <h1> 32 </h1>
                        </div>
                      </div>
                      <div className="rightbox-main">
                        <div className="rattotal">
                          <p> Total packages </p>
                          <span>
                            <svg
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 9L5 5L1 1"
                                stroke="#D4AF37"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="rnumrat">
                          <h1> 32 </h1>
                        </div>
                      </div>
                    </div>
                    <div className="rightbox-para">
                      <p>
                        {" "}
                        Hi, I'm Anil from the award-winning StayVista, with a
                        heart as vast as the peaks around me. My love for food
                        is steeped in Uttarakhand's flavors. Hosting allows me
                        to share favorite trails and spots, ensuring an
                        adventurous stay. Music resonates through my soul,
                        echoing mountain melodies. Let's share a meal, swap
                        travel tales, and let Uttarakhand's sounds be your
                        stay's soundtrack.
                      </p>
                    </div>
                  </div>
                  <div className="card revifeed">
                    <div className="feed-star">
                      <ul>
                        {activeStars.map((isActive, index) => (
                          <li key={index}>
                            <span onClick={() => handleStarClick(index)}>
                              <svg
                                className={`star ${isActive ? "active" : ""}`}
                                width="44"
                                height="42"
                                viewBox="0 0 44 42"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21.5245 1.08156C21.6741 0.620906 22.3259 0.620901 22.4755 1.08156L26.9128 14.7381C27.1136 15.3561 27.6896 15.7746 28.3394 15.7746H42.6987C43.1831 15.7746 43.3845 16.3944 42.9926 16.6791L31.3757 25.1193C30.8499 25.5013 30.63 26.1783 30.8308 26.7963L35.268 40.4529C35.4177 40.9135 34.8905 41.2966 34.4986 41.0119L22.8817 32.5717C22.3559 32.1897 21.6441 32.1897 21.1183 32.5717L9.50137 41.0119C9.10952 41.2966 8.58228 40.9135 8.73195 40.4529L13.1692 26.7963C13.37 26.1783 13.1501 25.5013 12.6243 25.1193L1.00738 16.6791C0.615522 16.3944 0.816905 15.7746 1.30127 15.7746H15.6606C16.3104 15.7746 16.8864 15.3561 17.0872 14.7381L21.5245 1.08156Z"
                                  stroke="#737373"
                                />
                              </svg>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="feed-coment">
                      <label for> Give Feedback </label>
                      <textarea
                        id="feed"
                        name="feed"
                        rows="8"
                        cols="50"
                        placeholder="Share the details pf your own experience at this place"
                      />
                    </div>
                    <div className="payment-btns-main feedcns">
                      <p>Cancel</p>
                      <p>Submit</p>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Packagenthost;
