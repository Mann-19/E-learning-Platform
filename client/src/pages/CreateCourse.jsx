import Navbar from "../components/Navbar";
import EditableField from "../components/EditableField";
import { useAuthContext } from "../hooks/useAuthContext";
import { supabase } from "../lib/supabaseClient";
import { useState } from 'react';

const CreateCourse = () => {
  const [courseTitle, setCourseTitle] = useState("Course Title");
  const [description, setDescription] = useState("Description");
  const { state } = useAuthContext();

  const handleSave = async() => {
    const courseData = {
      title: courseTitle,
      description: description,
      instructor_id: state.user?.id
    }

    const { data, error } = await supabase
      .from('courses')
      .update(courseData)
      .eq("id", courseId)
  }

  return (
    <div className="">
      <Navbar />

      <h2 className="ml-10 mt-10 text-base text-gray-500 underline">Create a course</h2>
      <section className="p-10">

        {/* Title */}
        <div className="flex justify-between">
          <EditableField
            value={courseTitle}
            onChange={setCourseTitle}
            className="text-2xl font-bold"
            placeholder="Enter course title"
          />

          <button className="bg-yellow-300 px-4 py-2 rounded-sm font-medium text-black/80 cursor-pointer">Create Course</button>
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
