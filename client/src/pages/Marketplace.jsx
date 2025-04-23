import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard(Marketplace)";

export default function Marketplace() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch courses from backend API
    fetch("http://localhost:5000/api/courses") // adjust this to your actual backend route
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
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

      <div className="space-y-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
