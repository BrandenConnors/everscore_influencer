

export function Footer (props: any) {
    return (
        <div className="col-span-12 h-auto rounded-lg bg-gray-600 p-4 mb-4">
        <div className="mx-auto md:flex p-2">
          <div className="h-auto w-1/2 md:w-1/5 rounded-lg  pb-8">
            <div className="flex flex-col h-full">
              <div className="text-xl font-bold text-black dark:text-gray-200">
                <span className="uppercase">Cannabis 101</span>
                <ul>
                  <li className="text-base px-py">
                    <a href="#">Forms of CBD</a>
                  </li>
                  <li className="text-base px-py">
                    <a href="#">CBD vs THC</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-auto w-1/2 md:w-1/5 rounded-lg pb-8">
            <div className="flex flex-col h-full">
              <div className="text-xl font-bold text-black dark:text-gray-200">
                <span className="uppercase">Company</span>
                <ul>
                  <li className="text-base px-py">
                    <a href="#">About Us</a>
                  </li>
                  <li className="text-base px-py">
                    <a href="#">Terms of Use</a>
                  </li>
                  <li className="text-base px-py">
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-auto w-1/2 md:w-1/5 rounded-lg pb-8 ">
            <div className="flex flex-col h-full">
              <div className="text-xl font-bold text-black dark:text-gray-200">
                <span className="uppercase">Customer Service</span>
                <ul>
                  <li className="text-base px-py">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="text-base px-py">
                    <a href="#">Shipping & Returns</a>
                  </li>
                  <li className="text-base px-py">
                    <a href="#">FAQ</a>
                  </li>
                </ul>
                </div>
                </div>
          </div>
          <div className="h-auto w-2/3 md:w-1/4 rounded-lg pb-8 ">
          <div className="flex text-lg font-bold  text-black dark:text-gray-200">
                <div className="pb-2">
                <span className="uppercase text-xl">keep in touch</span>
                  </div>
                  </div>

              <div className="flex text-lg font-bold  text-black dark:text-gray-200">
                <div className="pb-2">
                <input type="text" placeholder="First Name" className="w-full max-w-xs border-black border-1 rounded-md"/>
                </div>
                <div className="pb-2">
                <input type="text" placeholder="Last Name" className="w-full max-w-xs border-black border-1 rounded-md " name="" id="" />
                </div>
                </div>
                <div className="flex text-lg font-bold  text-black dark:text-gray-200">
                <div className="pb-2">
                <input type="text" placeholder="Email" className="w-full max-w-xs border-black border-1 rounded-md " name="" id="" />
                </div>
                <div className="">
                  <button className="btn btn-block">
                    <span className="text-xs">
                      Subscribe
                    </span>
                  </button>
                  </div>
                  </div>
                
                
          </div>
        </div>
      </div>

        );
    }