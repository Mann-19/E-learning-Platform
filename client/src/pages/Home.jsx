import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CourseTile from "../components/CourseTile";

const Home = () => {
  return (
    <div className=" text-3xl h-[100vh] flex">
      {/*<Navbar />*/}
      <Sidebar />
      

      <main className="px-20 flex">
        <CourseTile title={"Some course"} description={"Something"}/>
        <CourseTile title={"Some course"} description={"Something"}/>
        <CourseTile title={"Some course"} description={"Something"}/>
      </main>
    </div>
  )
}
export default Home;