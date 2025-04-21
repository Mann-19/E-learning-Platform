import { useEffect, useState } from "react";
import ModuleTile from "../components/ModuleTile";
import Stepper from "../components/Stepper";

const Course = ({ courseId }) => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchModules() {
      try {
        const res = await fetch(`http://localhost:8000/api/modules?course_id=${courseId}`);
        const data = await res.json();
        if (res.ok) setModules(data);
      } catch (error) {
        console.error("Failed to fetch modules:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchModules();
  }, [courseId]);

  return (
    <div className="min-h-screen bg-white p-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Course Modules</h2>

      {loading ? (
        <p className="text-gray-500">Loading modules...</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Modules List */}
          <div className="flex-1 flex flex-col gap-4 max-w-md">
            {modules.map((module) => (
              <ModuleTile key={module.id} module={module} />
            ))}
          </div>

          {/* Right: Stepper */}
          <div className="w-full md:w-1/3">
            <Stepper modules={modules} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
