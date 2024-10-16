import Sidebar from "./SideBar";

function HomePage() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div>
          <Sidebar />
        </div>

        <div className="border hidden lg:block w-px h-screen border-black absolute top-0 left-24"></div>

        <div className="flex flex-col justify-center items-center h-full">
          <div className="border border-black w-fit h-fit p-6 rounded-lg mx-auto bg-zinc-300 mt-3 md:mt-10">
            <h1 className="text-3xl md:text-4xl">Frontend Developer</h1>
          </div>

          <div className="w-44 h-44 border border-black rounded-full flex justify-center items-center mx-auto my-8">
            <img src="" alt="Profile Photo" />
          </div>

          <div className="border border-black h-0 w-1/3 mx-auto md:w-1/5 lg:w-1/3 lg:mx-auto lg:my-6"></div>

          <div className="mx-10 my-4 text-center lg:text-left lg:flex lg:items-center lg:justify-center lg:flex-col lg:mx-auto lg:-mt-1">
            <p className="text-lg">Hi I'm</p>
            <h1 className="text-4xl -mt-1">Ritesh Kumar Karn</h1>
            <p className="text-lg mb-4">
              1<sup>st</sup> year | B.E. CSE
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
