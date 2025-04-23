import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CourseTile from "../components/CourseTile";
import { useEffect, useState } from "react";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("http://localhost:8000/api/courses");
        const data = await res.json();
        if (res.ok) setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className=" text-3xl h-[100vh] flex">
      {/*<Navbar />*/}
      <Sidebar />
      

      <main className="px-20 flex">
      <section>
        <h2>Jump back to learning</h2>
      {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          courses.map((Course) => (
            <CourseTile key={Course.id} course={Course} />
          ))
        )} 
        </section>
      </main>
    </div>
  )
}
export default Home;