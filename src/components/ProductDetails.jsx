function ProductDetails() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
        <div className="pt-8">
          <div className="flex items-center">
            <ol className="flex w-full items-center overflow-hidden">
              <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                <a href="#">Home</a>
              </li>
              <li className="text-body mt-0.5 text-base">/</li>
              <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                <a className="capitalize" href="#">
                  {" "}
                  products{" "}
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
        <div className="overflow-hidden">
          <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
            <div className="items-start justify-between lg:flex lg:space-x-8">
              <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                <div className="w-full xl:flex xl:flex-row-reverse">
                  <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                    <div className="relative flex items-center justify-center">
                      <img
                        alt="Product gallery 1"
                        src="https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1548&amp;q=80"
                        width="650"
                        height="590"
                        className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                      />
                    </div>
                    <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-2 xl:flex-col">
                    <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75">
                      <img
                        alt="Product 0"
                        src="https://images.unsplash.com/photo-1580902394836-21e0d429b7f4?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=924&amp;q=80"
                        decoding="async"
                        loading="lazy"
                        className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                      />
                    </div>
                    <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75">
                      <img
                        alt="Product 1"
                        src="https://images.unsplash.com/photo-1580902394743-1394a7ec93d2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                        decoding="async"
                        loading="lazy"
                        className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                      />
                    </div>
                    <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75">
                      <img
                        alt="Product 2"
                        src="https://images.unsplash.com/photo-1580902394767-81b0facc0894?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                        decoding="async"
                        loading="lazy"
                        className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px] mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                  Nike
                </h2>
                <h1 className="my-4 text-3xl font-semibold text-black">
                  Nike Air Max 21A
                </h1>
                <div className="my-4 flex items-center">
                  <span className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="ml-3 inline-block text-xs font-semibold">
                      {" "}
                      4 Reviews{" "}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur rem amet repudiandae neque adipisci eum enim, natus
                  illo inventore totam?
                </p>
                <div className="mb-5 mt-4 flex items-center border-b-2 border-gray-200"></div>
                <div className="my-4">
                  <div className="flex items-center">
                    <span className="mr-3 text-sm font-semibold">Color</span>
                    <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                    <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                    <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-sm font-semibold">Size</span>
                  <div className="relative">
                    <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                      <option>8 UK</option>
                      <option>9 UK</option>
                      <option>10 UK</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="my-4 flex items-center">
                  <span className="mr-3 text-sm font-semibold">Qty</span>
                  <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                    <button
                      className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                      disabled=""
                    >
                      +
                    </button>
                    <span className="duration-250 text-heading flex h-full w-12 flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out md:w-20 xl:w-24">
                      {" "}
                      1{" "}
                    </span>
                    <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                      -
                    </button>
                  </div>
                </div>
                <div className="mb-5 mt-4 flex items-center border-b-2 border-gray-200 pb-2"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between gap-4">
                    <span className="title-font text-xl font-bold text-gray-900">
                      {" "}
                      ₹47,199{" "}
                    </span>
                    <span className="title-font font-base text-sm text-gray-900 line-through">
                      {" "}
                      ₹50,500{" "}
                    </span>
                    <span className="title-font font-base text-base text-red-700">
                      {" "}
                      -20% off{" "}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="mb-4 mt-4 flex items-center border-b-2 border-gray-200 pb-1"></div>
                <div className="border-b-2 border-gray-200 shadow-sm">
                  <header className="flex cursor-pointer items-center justify-between py-2 transition-colors md:py-2">
                    <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                      Product Details
                    </h2>
                    <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                      <div className="bg-heading h-0.5 w-full rounded-sm"></div>
                      <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out"></div>
                    </div>
                  </header>
                  <div>
                    <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus nesciunt corporis nulla! Distinctio est nihil
                      similique hic culpa beatae pariatur fuga odit officia ad
                      quaerat, ipsa non aliquid exercitationem laudantium?
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-gray-200 shadow-sm">
                  <header className="flex cursor-pointer items-center justify-between py-5 transition-colors md:py-6">
                    <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                      Additional Information
                    </h2>
                  </header>
                </div>
              </div>
              ;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
