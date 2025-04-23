import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

const Marketplace = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("http://localhost:8000/api/courses"); // Adjust port if needed
        const data = await res.json();
        if (res.ok) setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-700">
        Find what suits you best
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 border rounded-full px-4 py-2 outline-none focus:ring-2 ring-yellow-300"
        />
      </div>

      {loading ? (
        <p className="text-yellow-500">Loading courses...</p>
      ) : (
        <div className="space-y-4">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;
