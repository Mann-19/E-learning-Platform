import { useEffect, useState } from "react";
import { Link } from "react-router";
import { supabase } from "../lib/supabaseClient";
import toast from "react-hot-toast";
import { Plus } from 'lucide-react';
import CourseTile from '../components/CourseTile';
import CourseCard from '../components/CourseCard';

const InstructorCourses = () => {
  const [drafts, setDrafts] = useState([]);
  const [publishedCourses, setPublishedCourses] = useState([]);

  const getDrafts = async () => {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("status", "draft");

    if (!error) {
      setDrafts(data);
    } else {
      toast.error(error.message);
    }
  };

  const getPublishedCourses = async () => {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("status", "published");

    if (error) {
      toast.error(error.message);
    } else {
      setPublishedCourses(data);
    }
  };

  // GET Course effects
  useEffect(() => {
    getDrafts();

    getPublishedCourses();
  }, []);

  return (
    <section className="mt-10 max-w-2xl">
      <div className="">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white/90">Your courses: </h2>

          <Link to={"/create-course"} className="flex items-center gap-2 rounded-sm bg-[#EAD300] px-4 py-1">
            <Plus size={20} />
            <span className="mt-0.5">Create course</span>
          </Link>
        </div>

        <p className="text-[#a0a0a0] text-xl font-bold mt-4">Drafts: </p>
        
        {/* Draft tiles */}
        <div>
          {drafts.length !== 0 ? (
            <div className="flex flex-col gap-3 my-3">
              {drafts.map((draft) => (
                <CourseTile key={draft.id} course={draft} />
              ))}
            </div>
          ) : (
            <p className="text-[#a0a0a0] text-xl font-light mt-2">No drafts yet</p>
          )}
        </div>

        <p className="text-[#a0a0a0] text-xl font-bold mt-10">Published courses: </p>
        <div>
          {publishedCourses.length !== 0 ? (
            <div className="flex flex-col gap-3 my-3">
              {publishedCourses.map((course) => (
                <CourseTile key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p className="text-[#a0a0a0] text-xl font-light mt-2">No Published courses.</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default InstructorCourses;
