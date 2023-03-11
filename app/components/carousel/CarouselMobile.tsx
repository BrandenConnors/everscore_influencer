export function CarouselMobile(props: any) {
  return (
    <div className="col-span-12 h-auto rounded-lg lg:hidden bg-gray-300 p-8">
      <div className="h-96 carousel carousel-vertical rounded-box place-items-center">
        <div className="carousel-item h-full w-96">
          <img
            className="rounded-lg object-cover py-1"
            src="images/Crew.JPG"
            alt="baggie"
          />
        </div>
        <div className="carousel-item h-full w-96">
          <img
            className="rounded-lg object-cover py-1"
            src="images/band.JPG"
            alt="band"
          />
        </div>
        <div className="carousel-item h-full w-96">
          <img
            className="rounded-lg object-cover py-1"
            src="images/baggie.JPG"
            alt="crew"
          />
        </div>
        <div className="carousel-item h-full  w-96 justify-center">
          <img
            className="rounded-lg object-cover py-1"
            src="images/skate.jpg"
            alt="skate"
          />
        </div>
        <div className="carousel-item h-full  w-96">
          <img
            className="rounded-lg object-cover py-1"
            src="images/hands.jpg"
            alt="hands"
          />
        </div>
        <div className="carousel-item h-full  w-96 justify-center">
          <img
            className="rounded-lg object-cover py-1"
            src="images/bike-crew.jpg"
            alt="bike-crew"
          />
        </div>
        <div className="carousel-item h-full  w-96">
          <img
            className="rounded-lg object-cover py-1"
            src="images/Halloween.JPG"
            alt="halloween"
          />
        </div>
      </div>
    </div>
  );
}
