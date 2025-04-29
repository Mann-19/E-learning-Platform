import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard(Marketplace)";
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuthContext } from "../hooks/useAuthContext";

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

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-800">
        Find what suits you best
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 border rounded-full px-4 py-2 outline-none focus:ring-2 ring-emerald-300"
        />
      </div>

      {loading ? 
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadingSpinner />
      </div> :
      <div className="space-y-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      }
    </div>
  );
}
