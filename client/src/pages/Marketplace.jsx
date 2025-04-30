import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { useAuthContext } from "../hooks/useAuthContext";
import Sidebar from '../components/Sidebar';

export default function Marketplace() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
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

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="flex">
      <Sidebar />

      <div className="px-20 py-10 w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-text-yellow">
          Find what suits you best
        </h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-[1.5px] border-gray-300 px-6 py-2 w-[350px] rounded-full outline-primary-accent"
          />
        </div>

        {loading ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="flex gap-5 flex-wrap">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
