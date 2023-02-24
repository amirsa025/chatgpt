import Head from 'next/head'
import Image from 'next/image'
import {data} from "@/app/constant/data";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";




export default function Home() {

  return (
    <>
      <Head>

        <title>Mia Chat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/favicon.png" />
      </Head>
      <div className=" md:pt-[68px] text-white md:px-[9.25rem] hidden md:block ">
         <Navbar/>
          <div className="grid grid-cols-2 ">
            <div>
              <div className={"text-white "} >
                <section className={"pt-[5rem]"}>
                  <div>
                    <Image
                        src="/image/Mia.png"
                        width={262}
                        height={123}
                        alt="Picture of the author"
                    />
                  </div>
                  <div className="w-[332px] py-[30px]">
                    <p className={"text-[40px] font-bold leading-[99.02%]"}>
                      Is there somethings to explore in AI WORLD?<br/>
                      Get Started
                    </p>
                  </div>
                </section>
                <section className="pt-[3.1rem] flex items-center space-x-8 ">
                  <div>
                    <a href="https://play.google.com/store/apps/details?id=com.mia.app">
                      <Image
                          src="/image/google.png"
                          width={189.53}
                          height={56.29}
                          alt="google"
                      />
                    </a>

                  </div>
                  <div>
                    <a href="https://apps.apple.com/us/app/id1668359797">
                      <Image
                          src="/image/appStore.png"
                          width={189.53}
                          height={56.29}
                          alt="appStore"
                      />
                    </a>

                  </div>
                </section>
                <section className={"flex items-center space-x-1 py-[3.188rem]"}>
                  <div className={"w-6 h-6 rounded-full  text-black text-center font-medium"}>
                    <div className={"sr-only"}>copyright</div>
                    <Image
                        src="/image/copyRight.png"
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />
                  </div>
                  <h3 className="text-[12px] text-[#787878]">All right resaved for Mia-GPT 4 Community. Copyright 2023</h3>
                </section>
              </div>
            </div>
            <div className={"md:flex md:items-center md:justify-center md:ml-12 lg:ml-0"}>
              <Image
                  src="/image/Group.png"
                  width={900}
                  height={694.79}
                  alt="Picture of the author"
              />
            </div>
          </div>

      </div>
      {/*Moblie*/}
      <div className="md:hidden flex">
        <div className={"text-white "} >
          <section className={"pt-[5rem]"}>
            <div>
              <Image
                  src="/image/Mia.png"
                  width={212}
                  height={100}
                  alt="Picture of the author"
              />
            </div>
            <div className="w-[332px] pt-[1.5rem]">
              <p className={"text-[40px] font-bold leading-[99.02%]"}>
                Is there somethings to explore in AI WORLD?<br/>
                Get Started
              </p>
            </div>
          </section>
          <section className="py-[1.8rem] flex items-center space-x-4 ">
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.mia.app">
                <Image
                    src="/image/google.png"
                    width={200}
                    height={47}
                    alt="Picture of the author"
                />
              </a>

            </div>
            <div>
              <a href="https://apps.apple.com/us/app/id1668359797">
                <Image
                    src="/image/appStore.png"
                    width={200}
                    height={47}
                    alt="Picture of the author"
                />
              </a>

            </div>
          </section>
          <section className="relative ">
            <div className="">
              <Image
                  src="/image/bgGround.png"
                  width={400.93}
                  height={354.27}
                  alt="Picture of the author"
              />
            </div>
            <div className="absolute bottom-[15px] right-12">
              <Image
                  src="/image/Group39.png"
                  width={130.3}
                  height={173.61}
                  alt="Picture of the author"
              />
            </div>
          </section>
          <section className={"flex items-center space-x-1 py-[27px]"}>
            <div className={"w-6 h-6 rounded-full  text-black text-center font-medium"}>
              <div className={"sr-only"}>copyright</div>
              <Image
                  src="/image/copyRight.png"
                  width={20}
                  height={20}
                  alt="Picture of the author"
              />
            </div>
            <h3 className="text-[10px] text-[#787878]">All right resaved for Mia-GPT 4 Community. Copyright 2023</h3>
          </section>
        </div>
      </div>
    </>
  )
}
