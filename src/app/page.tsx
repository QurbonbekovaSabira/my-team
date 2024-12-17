import React from "react";
import Image from "next/image";
import { Button } from "@/components/custom/button";
const Home = () => {
  return (
    <>
      <section
        className="md:pt-52 pt-28  lg:bg-[url('/main-bg-t.png')] lg:bg-no-repeat lg:bg-left
        "
      >
        <div className="container md:pb-60 pb-24 grid md:grid-cols-2 gap-7 justify-between items-end sm:bg-[url('/main-bg-b.svg')] sm:bg-right-bottom sm:bg-no-repeat">
          <h1 className="font-bold md:text-8xl text-5xl ">
            Find the best <span className="text-text-secondary">talent</span>
          </h1>
          <div className="h-full items-end flex flex-row md:bg-[url('/main-bg-line.png')] md:bg-no-repeat md:bg-left-top">
            <p className="md:text-lg text-base  font-semibold w-[85%] text-white">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-bg-secondary pb-56 md:pb-64   pt-16 md:pt-32 bg-[url('/build-bg-b.png')] bg-no-repeat bg-right-bottom">
        <div className="container pt-16 md:pt-32 sm:bg-[url('/build-bg-t.png')] bg-no-repeat  bg-left-top grid md:grid-cols-2 gap-24">
          <h2 className="text-white sm:text-5xl text-3xl font-bold">
            Build & manage distributed teams like no one else.
          </h2>
          <ul className=" flex flex-col gap-8">
            <li className="flex gap-6">
              <Image
                aria-hidden
                alt="Build icon"
                src={"/build-icon1.svg"}
                width={72}
                height={72}
              />
              <div>
                <p className="text-text-secondary font-bold mb-4 text-lg ">
                  Experienced Individuals
                </p>
                <p className="text-white font-semibold text-base">
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </li>
            <li className="flex gap-6">
              <Image
                aria-hidden
                alt="Build icon"
                src={"/build-icon2.svg"}
                width={72}
                height={72}
              />
              <div>
                <p className="text-text-secondary font-bold mb-4 text-lg ">
                  Easy to Implement
                </p>
                <p className="text-white font-semibold text-base">
                  Our processes have been refined over years of implementation
                  meaning our teams always deliver.
                </p>
              </div>
            </li>
            <li className="flex gap-6">
              <Image
                aria-hidden
                alt="Build icon"
                src={"/build-icon3.svg"}
                width={72}
                height={72}
              />
              <div>
                <p className="text-text-secondary font-bold mb-4 text-lg ">
                  Enhanced Productivity
                </p>
                <p className="text-white font-semibold text-base">
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="sm:pt-64 pt-32 bg-[url('/comments-bg-t.svg')] bg-no-repeat bg-left-top">
        <div className="sm:pb-64 pb-32 bg-[url('/comments-bg-t.svg')] bg-no-repeat bg-right-bottom">
          <div className="container">
            <h2 className="font-bold text-white sm:text-5xl text-3xl mb-14 text-center">
              Delivering real results for top companies. Some of our{" "}
              <span className="text-text-primary">success stories.</span>
            </h2>
            <ul className=" grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 items-center justify-between text-center">
              <li className="bg-[url('/comment-icon.svg')] bg-top bg-no-repeat space-y-6">
                <p className="text-white font-semibold text-base">
                  “The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned.”
                </p>
                <div className="space-y-8">
                  <div>
                    <p className="text-text-primary text-lg font-bold">
                      Kady Baker
                    </p>
                    <p className="text-sm font-medium text-white">
                      Product Manager at Bookmark
                    </p>
                  </div>
                  <Image
                    aria-hidden
                    src={"/comment-women-img.png"}
                    alt="Kady Bake"
                    width={62}
                    height={62}
                    className="mx-auto"
                  />
                </div>
              </li>
              <li className="bg-[url('/comment-icon.svg')] bg-top bg-no-repeat space-y-6">
                <p className="text-white font-semibold text-base">
                  “The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned.”
                </p>
                <div className="space-y-8">
                  <div>
                    <p className="text-text-primary text-lg font-bold">
                      Kady Baker
                    </p>
                    <p className="text-sm font-medium text-white">
                      Product Manager at Bookmark
                    </p>
                  </div>
                  <Image
                    aria-hidden
                    src={"/comment-women-img.png"}
                    alt="Kady Bake"
                    width={62}
                    height={62}
                    className="mx-auto"
                  />
                </div>
              </li>
              <li className="bg-[url('/comment-icon.svg')] bg-top bg-no-repeat space-y-6">
                <p className="text-white font-semibold text-base">
                  “The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned.”
                </p>
                <div className="space-y-8">
                  <div>
                    <p className="text-text-primary text-lg font-bold">
                      Kady Baker
                    </p>
                    <p className="text-sm font-medium text-white">
                      Product Manager at Bookmark
                    </p>
                  </div>
                  <Image
                    aria-hidden
                    src={"/comment-women-img.png"}
                    alt="Kady Bake"
                    width={62}
                    height={62}
                    className="mx-auto"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-text-secondary py-20 sm:bg-[url('/contact-bg.svg')] bg-left-top bg-no-repeat">
        <div className="container flex items-center justify-between">
          <h2 className="text-bg-secondary sm:text-5xl text-3xl font-bold">
            Ready to get started?
          </h2>
          <Button variant="secondary">Contact us</Button>
        </div>
      </section>
    </>
  );
};

export default Home;
