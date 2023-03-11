import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import { SocialStack } from "~/components/social/SocialStack";
import { Footer } from "~/components/social/Footer";
import { Header } from "~/components/Header";
import { Products } from "~/components/Products";
import { SocialLinks } from "~/components/SocialLinks";
import { CarouselMobile } from "~/components/carousel/CarouselMobile";
import { CarouselFull } from "~/components/carousel/CarouselFull";
import { CarouselArrows } from "~/components/carousel/CarouselArrows";
import { useState } from "react";

// export const links: LinksFunction = () => {
//   return [
//     {
//       rel: "preload",
//       href: "images/chef.JPG",
//       as: "image",
//     },
//   ];
// };

export default function Index() {
  const [show, setShow] = useState(true);

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="absolute inset-0 bg-gray-50 sm:bg-white ">
        <div className="container mx-auto grid grid-cols-12 gap-4 px-6">
          {/* Header */}
          <div className=" col-span-12 h-auto w-full rounded-lg bg-gray-300 p-8 mt-4">
            <div className="flex flex-wrap justify-center gap-6">
              <img
                className="mask mask-squircle flex justify-center rounded-xl h-40"
                src="images/Main selfie.jpg"
                alt="Me and my bike"
              ></img>
              <h2 className="flex items-center font-bold text-gray-800 text-center px-20">
                Shannon Dorn
              </h2>
              <div className="flex place-items-end">
                <button className="btn" onClick={() => setShow(!show)}>
                  {show === true ? "Favorite Products" : "About Me"}
                </button>
              </div>
            </div>
          </div>

          {/* Bio */}
          {show && (
            <div className="col-span-12 h-auto rounded-lg bg-gray-300 p-4">
              <div className="flex">
                <div className="w-full">
                  <div className="h-auto w-full grid place-items-center rounded-lg bg-white dark:bg-gray-600 text-lg">
                    <p className="p-2 text-xl">
                      This is where I talk about my background and why I am
                      passionate about cannabis and the community.
</p>
                    <p className="p-2 text-xl">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic inventore laudantium vel aut molestias quas, perspiciatis illo id beatae, eius consequuntur veniam velit, eveniet nostrum labore commodi fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime cumque veritatis earum magnam nisi eaque accusantium modi impedit! Neque quasi, labore veritatis repudiandae ipsam omnis dicta architecto accusantium quibusdam?
                      

                    </p>
                  </div>
                  <div className="w-full pb-2"></div>
                </div>
              </div>
            </div>
          )}
          {/* Carousel */}
          {show && <CarouselMobile />}
          {show && <CarouselArrows />}
          {/* {show && <CarouselFull className=""/>} */}

          {/* Products */}
          <div className="col-span-12 h-auto rounded-lg bg-gray-300 p-4">
            <div className="flex">
              <div className="w-full">
                <div className="h-auto w-full grid place-items-center rounded-lg bg-white dark:bg-gray-600">
                  <p className="p-2 text-xl ">
                    This is where I talk about everscore and the products I
                    picked so I can get my followers to try them
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Products />
          <SocialStack />
          <SocialLinks />
          <Footer />
          
        </div>
      </div>
    </main>
  );
}
