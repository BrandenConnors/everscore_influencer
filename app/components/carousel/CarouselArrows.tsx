export function CarouselArrows(props: any) {
    return (
        <div className="col-span-12 h-auto rounded-lg bg-gray-300 p-8 hidden lg:block ">
        <div className="carousel w-auto h-96 cover">
          <div id="slide1" className="carousel-item relative w-full justify-center rounded-lg">
           
            <img src="/images/Crew.JPG" className="object-cover w-1/2 h-full max-w-xl mx-4 rounded-lg " alt="chef" />
            <img src="/images/skate.jpg" className="object-cover w-1/2 h-full max-w-xl mx-4 rounded-lg"alt="chef" />
            {/* <img src="/images/Crew.JPG" className="object-cover w-1/3 h-full max-w-2xl mx-4 rounded-lg"alt="chef" /> */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full justify-center">
          <img src="/images/baggie.JPG" className="object-cover h-full w-1/2 max-w-xl mx-4 rounded-lg " alt="chef" />
            <img src="/images/band.JPG" className="object-cover h-full w-1/2 max-w-xl mx-4 rounded-lg"alt="chef" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full justify-center mx-4">
          <img src="/images/hands.jpg" className="object-cover w-1/2 h-full max-w-xl mx-4 rounded-lg" alt="chef" />
            <img src="/images/bike-crew.jpg" className="object-cover w-1/2 h-full max-w-xl mx-4 rounded-lg"alt="chef" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full justify-center">
          <img src="/images/Halloween.JPG" className="object-cover w-1/2 h-full max-w-xl mx-4 rounded-lg " alt="chef" />
            <img src="/images/cupcakes.jpg" className="object-cover w-1/2 h-full max-w-xl mx-4 rounded-lg"alt="chef" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}
