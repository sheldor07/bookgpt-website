export default function ImageCarousel({ bookName }) {
  bookName = "atomic-habits";
  const slides = [
    {
      url: `https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${bookName}/notion-mockup-2.png`,
    },
    {
      url: `https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${bookName}/notion-mockup-2.png`,
    },
    {
      url: `https://qhaaptobpyvibymtemus.supabase.co/storage/v1/object/public/gptbookclub/${bookName}/notion-mockup-2.png`,
    },
  ];


  return (
    <div className="relative h-full max-h-[390px] w-full max-w-[500px]">
      <div
        style={{ backgroundImage: `url(${slides[0].url})` }}
        className="w-full h-full duration-500 bg-center bg-contain rounded-2xl"
      ></div>

        {/* <div className="absolute w-10 group-hover:block -translate-y-52">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            ></path>
          </svg>
        </div> */}
      
      

        {/* <div className="absolute right-0 w-10 -translate-y-52">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </div> */}

    </div>
  );
}
