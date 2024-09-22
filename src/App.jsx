import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();

      let xTransform = gsap.utils.random(-100, 100);

      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },
        "start"
      )
        .to(
          image,
          {
            scale: 0,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        )
        .to(elem, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
    });
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    termsAgreed: false,
  });

  // Handle form change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission (dummy function)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="w-full h-screen bg-black ">
        <img
          className="absolute top-0 left-0 w-full h-full -z-10 opacity-1"
          src="https://media.istockphoto.com/id/1732963074/photo/starry-night-sky-in-space.jpg?s=2048x2048&w=is&k=20&c=3jbAqgp5PstMjPiQ-Nc1We0uOwA4tgIPzpddgQR1tcw="
          alt=""
        />
        <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 1, ["--c"]: 3 }}
          >
            <img src="/img1-removebg-preview.png" alt="Image 1" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 1, ["--c"]: 7 }}
          >
            <img src="/img2-removebg-preview.png" alt="Image 2" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 2, ["--c"]: 2 }}
          >
            <img src="/img3-removebg-preview.png" alt="Image 3" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 2, ["--c"]: 6 }}
          >
            <img src="/img4-removebg-preview.png" alt="Image 4" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 3, ["--c"]: 4 }}
          >
            <img src="/img5-removebg-preview.png" alt="Image 5" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 3, ["--c"]: 8 }}
          >
            <img src="/img6-removebg-preview.png" alt="Image 6" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 4, ["--c"]: 1 }}
          >
            <img src="/img7-removebg-preview.png" alt="Image 7" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 4, ["--c"]: 4 }}
          >
            <img src="/img8-removebg-preview.png" alt="Image 8" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 5, ["--c"]: 2 }}
          >
            <img src="/img9.png" alt="Image 9" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 5, ["--c"]: 6 }}
          >
            <img src="/img10.png" alt="Image 10" />
          </div>
        </div>
        <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 6, ["--c"]: 3 }}
          >
            <img src="/img1-removebg-preview.png" alt="Image 11" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 6, ["--c"]: 7 }}
          >
            <img src="/img2-removebg-preview.png" alt="Image 12" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 7, ["--c"]: 5 }}
          >
            <img src="/img3-removebg-preview.png" alt="Image 13" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 7, ["--c"]: 8 }}
          >
            <img src="/img4-removebg-preview.png" alt="Image 14" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 8, ["--c"]: 1 }}
          >
            <img src="/img5-removebg-preview.png" alt="Image 15" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 8, ["--c"]: 4 }}
          >
            <img src="/img6-removebg-preview.png" alt="Image 16" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 9, ["--c"]: 2 }}
          >
            <img src="/img7-removebg-preview.png" alt="Image 17" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 9, ["--c"]: 6 }}
          >
            <img src="/img8-removebg-preview.png" alt="Image 18" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 10, ["--c"]: 3 }}
          >
            <img src="/img9.png" alt="Image 19" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ ["--r"]: 10, ["--c"]: 7 }}
          >
            <img src="/img10.png" alt="Image 20" />
          </div>
        </div>
      </div>
      <div className="fixed top-0 font-['Helvetica-Now-Display'] left-0 w-full h-full flex flex-col justify-center items-center">
        <section className="min-h-screen bg-black">
          <div className="container mx-auto h-full">
            <div className="flex justify-center items-center h-full">
              <div className="w-full max-w-screen-lg">
                <div className="bg-black text-white rounded-lg shadow-lg">
                  <div className="p-6 md:p-10">
                    <div className="flex justify-center">
                      <div className="w-full md:w-1/2">
                        <p className="text-center text-3xl font-sans font-bold mb-8">
                          Sign up
                        </p>

                        <form
                          className="space-y-6 w-326px"
                          onSubmit={handleSubmit}
                        >
                          <div className="flex items-center space-x-3">
                            <i className="fas fa-user fa-lg text-gray-500"></i>
                            <div className="w-full">
                              <input
                                type="text"
                                id="form3Example1c"
                                name="name"
                                className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500 font-sans"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                              />
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <i className="fas fa-envelope fa-lg text-gray-500"></i>
                            <div className="w-full">
                              <input
                                type="email"
                                id="form3Example3c"
                                name="email"
                                className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500 font-sans"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                              />
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <i className="fas fa-lock fa-lg text-gray-500"></i>
                            <div className="w-full">
                              <input
                                type="password"
                                id="form3Example4c"
                                name="password"
                                className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500 font-sans"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                              />
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <i className="fas fa-key fa-lg text-gray-500"></i>
                            <div className="w-full">
                              <input
                                type="password"
                                id="form3Example4cd"
                                name="repeatPassword"
                                className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500 font-sans"
                                value={formData.repeatPassword}
                                onChange={handleChange}
                                placeholder="Repeat your password"
                              />
                            </div>
                          </div>

                          <div className="flex justify-center items-center">
                            <input
                              type="checkbox"
                              id="form2Example3c"
                              name="termsAgreed"
                              className="mr-2"
                              checked={formData.termsAgreed}
                              onChange={handleChange}
                            />
                            <label
                              className="font-sans"
                              htmlFor="form2Example3"
                            >
                              I agree to all statements in{" "}
                              <a
                                href="#!"
                                className="text-orange-500 font-sans"
                              >
                                Terms of service
                              </a>
                            </label>
                          </div>

                          <div className="flex justify-center">
                            <button
                              type="submit"
                              className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-lg focus:ring-4 focus:ring-indigo-300 font-sans"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>

                      <div className="hidden md:flex items-center justify-center w-full md:w-1/2">
                        {/* <img
                  src="https"
                  className="img-fluid"
                  alt="Sample"
                /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
