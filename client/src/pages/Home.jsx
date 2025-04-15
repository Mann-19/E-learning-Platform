import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className=" text-3xl h-[100vh]">
      {/*<Navbar />*/}
      <Sidebar />

      <main className="px-20">
        <p className="text-black text-base">Home page stuff</p>
      </main>
    </div>
  )
}
export default Home;