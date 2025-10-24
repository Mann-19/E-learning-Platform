import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const LearnerCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const getEnroledCourses = async () => {
    
  };

  useEffect(() => {
    getEnroledCourses();
  }, []);

  return <div>{}</div>;
};
export default LearnerCourses;
