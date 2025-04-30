import { useEffect, useState } from "react";
import ModuleTile from "../components/ModuleTile";
import Stepper from "../components/Stepper";
import { useAuthContext } from "../hooks/useAuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import Sidebar from "../components/Sidebar";

const Course = ({ courseId }) => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, session } = useAuthContext();

  useEffect(() => {
    async function fetchModules() {
      try {
        const res = await fetch(
          `http://localhost:8000/api/modules?course_id=${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${session?.access_token}`,
            },
          }
        );
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
    <section className="flex">
      <Sidebar />

      <div className="bg-white p-10 w-full max-h-full">
        <h2 className="text-3xl font-bold mb-6 text-text-yellow">
          Course Modules
        </h2>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex gap-12">
            {/* Left: Modules List */}
            <div className="flex-1 flex flex-col gap-8 max-w-md">
              {modules.map((module) => (
                <ModuleTile key={module.id} module={module} />
              ))}
            </div>

            {/* Right: Stepper */}
            <div className="w-max">
              {/* <Stepper modules={modules} /> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Course;
