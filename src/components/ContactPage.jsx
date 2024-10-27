import React from "react";
import { Helmet } from "react-helmet-async";
import x from "../assets/ContactLogo/xLogo.svg";
import insta from "../assets/ContactLogo/instaLogo.svg";
import linkedin from "../assets/ContactLogo/linkedinLogo.svg";
import gitHub from "../assets/SkillsLogo/github-logo.svg";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Ritesh's Portfolio</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <div className="p-2">
          <h1 className="font-bold text-2xl">Let's Connect</h1>
        </div>
        <div>
          <h1 className="text-sky-500">riteshkumarkarn414@gmail.com</h1>
        </div>
        <div className="p-2 m-2">
          <div className="border border-black m-3 rounded-xl">
            <form action="/submit" method="post">
              <div className="flex flex-col">
                <div className="m-3 p-2 flex">
                  <label htmlFor="name" className="text-sm">
                    Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border-b border-black mx-2"
                    required
                  />
                </div>
                <div className="m-3 p-2 flex">
                  <label htmlFor="email">Email :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border-b border-black mx-2"
                    required
                  />
                </div>
                <div className="m-2 p-2 flex flex-col">
                  <label htmlFor="message">Message :</label>
                  <br />
                  <textarea
                    name="message"
                    id="message"
                    className="border border-black p-2"
                    rows={4}
                    required
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="w-fit flex mx-auto p-2">
                  <div className="w-10 h-10 border border-black rounded-full m-1 bg-cyan-50">
                    <a
                      href="https://www.linkedin.com/in/ritesh-kumar-karn-ab90a9247/"
                      target="_blank"
                    >
                      <img
                        src={linkedin}
                        alt="Linkedin"
                        className="object-contain p-1"
                      />
                    </a>
                  </div>
                  <div className="w-10 h-10 border border-black rounded-full m-1 bg-cyan-50">
                    <a
                      href="https://www.instagram.com/riteshkrkarn/"
                      target="_blank"
                    >
                      <img
                        src={insta}
                        alt="Instagram"
                        className="object-contain p-1"
                      />
                    </a>
                  </div>
                  <div className="w-10 h-10 border border-black rounded-full m-1 bg-cyan-50">
                    <a href="https://x.com/riteshkrkarn" target="_blank">
                      <img src={x} alt="X" className="object-contain p-1" />
                    </a>
                  </div>
                  <div className="w-10 h-10 border border-black rounded-full m-1 bg-cyan-50">
                    <a
                      href="https://github.com/riteshkumarkarn"
                      target="_blank"
                    >
                      <img
                        src={gitHub}
                        alt="Github"
                        className="object-contain p-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
