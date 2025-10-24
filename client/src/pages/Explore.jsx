import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Sidebar from "../components/Sidebar";
import Card from "../components/CourseCard";
import toast from "react-hot-toast";
import { useAuthContext } from "../hooks/useAuthContext";

const Explore = () => {
  const [courses, setCourses] = useState([]);
  const { state } = useAuthContext();
  const userRole = state?.user?.user_metadata.role;

  const handleEnrolment = async() => {
    const { data, error } = supabase
      .from('enrolments')
      .insert()
  }

  const getCourses = async () => {
    const { data, error } = await supabase
      .from('courses')
      .select('*')

    if (error) {
      toast.error("Failed to fetch courses");
      console.error(error.message);
    } else {
      setCourses(data);
      console.log("Data", data);
      console.log(courses);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <section className="flex gap-10">
      <Sidebar />

      <div className="p-10">
        <h2 className="text-2xl mt-1.5 text-[#EAD300] tracking-wider font-bold">Explore courses</h2>

        {courses.length > 0 &&
          courses.map((course) => <Card key={course.id} course={course} role={userRole} />)}
      </div>
    </section>
  );
};
export default Explore;
