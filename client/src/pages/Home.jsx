import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" text-3xl bg-black h-[100vh]">
      <Navbar />

      <main className="px-20">
        <p className="text-white text-base">Home page stuff</p>
      </main>
    </div>
  )
}
export default Home;