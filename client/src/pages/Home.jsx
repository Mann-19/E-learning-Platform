import Sidebar from "../components/Sidebar";
import CourseTile from "../components/CourseTile";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, session } = useAuthContext();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("http://localhost:8000/api/courses", {
          headers: {
            Authorization: `Bearer ${session?.access_token}`,
          },
        });
        const data = await res.json();
        if (res.ok) setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      fetchCourses();
    }
  }, []);

  return (
    <div className=" text-3xl h-[100vh] flex">
      <Sidebar />

      <main className="px-20 py-10 flex bg-[#262626] w-full h-full font-league">
        {/* Resume Courses Section */}
        <section className="flex flex-col gap-10 min-w-[50%]">
          <h2 className="text-text-yellow font-extrabold text-3xl">
            Jump back to learning
          </h2>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-[#A0A0A0] flex justify-between">
              <span className="font-bold">Your Roadmaps</span>
              <Link
                to={`/course`}
                className="text-base font-normal mr-2 underline"
              >
                See all
              </Link>
            </h3>
            <div className="flex flex-col gap-4 justify-center items-center h-[270px] w-full">
              {loading ? (
                <LoadingSpinner />
              ) : (
                courses.map((course) => (
                  <CourseTile key={course.id} course={course} />
                ))
              )}
            </div>
          </div>
        </section>

        <section>{/* <ProgressChart /> */}</section>
      </main>
    </div>
  );
};
export default Home;
