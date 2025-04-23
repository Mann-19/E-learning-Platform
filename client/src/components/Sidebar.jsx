const Sidebar = () => {
    return (
      <div className="w-64 bg-[#FFF176] h-screen flex flex-col justify-between p-6 text-black font-semibold">
        <div>
          <h1 className="text-2xl mb-10">EduMarg</h1>
  
          <div className="space-y-4">
            <button className="w-full text-xl text-left bg-[#FFF9C4] py-2 px-4 rounded-md hover:bg-[#FFF59D]">
              Home
            </button>
  
            <button className="w-full text-xl text-left bg-[#FFF9C4] py-2 px-4 rounded-md hover:bg-[#FFF59D]">
              Community
            </button>
  
            <button className="w-full text-xl text-left bg-[#FFF9C4] py-2 px-4 rounded-md hover:bg-[#FFF59D]">
              GyanSangam
            </button>
          </div>
        </div>
  
        <div className="space-y-4">
          <button className="text-2xl w-full text-left">
            Profile
          </button>
          <button className="text-2xl w-full text-left">
            Settings
          </button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  
  