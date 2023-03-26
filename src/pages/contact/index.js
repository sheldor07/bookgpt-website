import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <div>
      <Header />
      <div className="text-center text-7xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#7928CA] to-[#FF0080]">
        meet the team
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="flex flex-col items-center ">
          <p className="p-20 text-lg text-white font-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            finibus nisl a turpis pretium consequat. Pellentesque pretium in
            erat eu suscipit. Donec dictum eros eget neque tristique blandit.
            Suspendisse elementum enim sed mollis mollis. Cras iaculis, dolor a
            vulputate hendrerit, ipsum eros gravida nunc, in aliquet ante arcu
            nec ligula. Praesent faucibus neque eget augue tempus, non dapibus
            arcu pulvinar. Nam sagittis dignissim nulla, vitae pulvinar dolor.
            Integer tempus tellus quam, in facilisis est sollicitudin et. In
            pulvinar mollis massa. Nullam lobortis eros lorem, at pulvinar neque
            egestas ut. Ut a diam eu arcu bibendum aliquet. Fusce sed interdum
            orci, eget placerat leo. Duis sollicitudin, dolor tempor semper
            interdum, urna risus porta ligula, nec faucibus leo massa in arcu.
            Quisque egestas, sapien quis pharetra tristique, ligula nibh
            porttitor justo, eget venenatis odio enim in augue. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Proin blandit eget orci vitae fermentum. Morbi neque metus,
            aliquet et ante quis, placerat rhoncus magna. Vestibulum a malesuada
            augue. Phasellus a lectus sollicitudin lectus vulputate hendrerit.
            Aliquam erat volutpat. In semper lacinia metus, sed porta neque
         
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/50955708?s=400&u=47ff24cd087700b652a5e5adf1819c3859ac112f&v=4"
            className="rounded-full h-96 w-96"
          />
          <div className="text-3xl font-bold">Yajat Gulati</div>
        </div>
      </div>
      <Footer />
      <style global jsx>
        {`
            body{
                background-color: black;
            `}
      </style>
    </div>
  );
}
