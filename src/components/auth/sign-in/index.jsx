import React, { useState } from "react";
import { authImage, AuthLogo } from "../../../assets/images";
import {  useNavigate } from "react-router-dom";
import UserForm from "./sub-component/tab/sign-up/UserForm";
import AgentForm from "./sub-component/tab/sign-in/AgentForm";

const index = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const GotoNext = (type) => {
    localStorage.setItem("UserType", type);
    if (type === "Agent") {
      navigate("/");
    } else {
      navigate("/");
    }
  };

  const tabs = [
    { title: "User Registration", content: <UserForm /> },
    { title: "Agent Registration", content: <AgentForm /> },
  
  ];
  return (
    <>
      <div className="auth-wrapper auth-wrp-hght">
        <div className="auth-wrapper-inner">
          <div className="auth-flex">
            <div className="auth-flex-50">
              <div className="auth-main">
                <div className="auth-logo">
                  <img src={AuthLogo} alt="" />
                </div>
                <div className="auth-form-main">
                  <div className="auth-inner-main auth-hgt-st">
                    <div className="auth-top-main">
                      <h3>
                        Partner with Us on a Journey of Spiritual Fulfillment
                      </h3>
                    </div>
                    <span><svg
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.24909 11.5254L3.1805 10.2072L4.1908 9.3809L3.1805 8.14138L4.48223 7.07894L5.53139 8.37748L4.54052 9.20382L5.53139 10.404L4.24909 11.5254ZM0.479892 2.51439C1.35419 0.625613 3.49136 0.114069 5.43425 1.13716C8.19314 2.67179 8.46515 5.58366 8.46515 8.49553V15.1259C8.46515 16.3851 10.6218 15.6965 10.9326 14.4767V2.31765L12.7978 3.08496V17.2311C12.7978 19.8872 14.3521 19.8872 14.3521 19.8872H12.4869C12.4869 19.8872 10.9326 19.8872 10.9326 17.2311V15.8539C10.1166 17.2311 6.63884 18.9625 6.58055 15.5785V7.74789C6.58055 6.4887 6.63884 4.58025 6.0754 3.51781C4.48223 0.664963 -0.452692 3.8326 2.55878 8.14138C2.55878 8.14138 -0.899556 5.38691 0.479892 2.51439Z"
        fill="white"
      />
    </svg></span>
                    <div className="auth-user-agnet-tab">
                      <ul>
                        {tabs.map((tab, index) => (
                          <li key={index} onClick={() => setActiveTab(index)}>
                            <span
                              className={`tab-title ${
                                index == activeTab ? "active" : ""
                              }`}
                            >
                              {tab.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="tab-content">{tabs[activeTab].content}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="auth-flex-50">
              <div className="auth-discrption">
                <div className="auth-discrption-inner">
                  <div className="auth-discrption-main">
                    <div className="auth-discription-image">
                      <span
                        className="auth-bg"
                        style={{ backgroundImage: `url(${authImage})` }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
