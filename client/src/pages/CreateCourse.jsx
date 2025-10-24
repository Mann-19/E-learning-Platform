import Navbar from "../components/Navbar";
import EditableField from "../components/EditableField";
import { useAuthContext } from "../hooks/useAuthContext";
import { supabase } from "../lib/supabaseClient";
import { useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router";

const CreateCourse = () => {
  const [courseTitle, setCourseTitle] = useState("Course Title");
  const [description, setDescription] = useState("Description");
  const { state } = useAuthContext();
  const navigate = useNavigate();

  const handleCreateCourse = async () => {
    const courseData = {
      title: courseTitle,
      description: description,
      instructor_id: state.user?.id,
    };

    const { data: courses, error } = await supabase
      .from("courses")
      .insert([courseData])
      .select();

    if(!error) {
      console.log("Course created successfully: ", courses);
      toast.success("Created course successfully");
      navigate('/profile');
    } else {
      toast.error('Error creating course: ', error);
    }
  };

  return (
    <div className="">
      <Navbar />

      <h2 className="ml-10 mt-10 text-base text-gray-500 underline">
        Create a course
      </h2>
      <section className="p-10">
        {/* Title */}
        <div className="flex justify-between">
          <EditableField
            value={courseTitle}
            onChange={setCourseTitle}
            className="text-2xl font-bold"
            placeholder="Enter course title"
          />

          <button onClick={handleCreateCourse} className="bg-yellow-300 px-4 py-2 rounded-sm font-medium text-black/80 cursor-pointer">
            Create Course
          </button>
        </div>

        {/* Description */}
        <EditableField
          value={description}
          onChange={setDescription}
          type="textarea"
          className="text-lg font-semibold text-gray-500 mt-4 w-[400px]"
          placeholder="Enter description"
        />

        {/* Module part */}
        <div className="mt-10 text-xl text-gray-400">
          Module editing coming soon...
        </div>
      </section>
    </div>
  );
};

export default CreateCourse;
