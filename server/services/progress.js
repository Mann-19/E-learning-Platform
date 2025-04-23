import supabase from "../config/database.js";

// Get progress by student ID
export async function fetchProgressByStudentId(studentId) {
  try {
    const { data, error } = await supabase
      .from("Progress")
      .select("*")
      .eq("student_id", studentId);

    if (error) {
      throw new Error(`Error fetching progress: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Error fetching progress: ${error.message}`);
  }
}

// Update progress by student ID
export async function updateProgressForStudent(studentId, updateData) {
  try {
    const { data, error } = await supabase
      .from("Progress")
      .update(updateData)
      .eq("student_id", studentId)
      .select();

    if (error) {
      throw new Error(`Error updating progress: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Error updating progress: ${error.message}`);
  }
}


