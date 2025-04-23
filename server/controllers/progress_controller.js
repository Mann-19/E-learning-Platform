  import {
    fetchProgressByStudentId,
    updateProgressForStudent,
  } from "../services/progress.js"
  
  // Controller: GET progress
  const getProgress = async(req, res) => {
    const { student_id } = req.params;
  
    try {
      const progress = await fetchProgressByStudentId(student_id);
  
      if (!progress || progress.length === 0) {
        return res.status(404).json({ message: "No progress found for this student." });
      }
  
      res.status(200).json(progress);
    } catch (error) {
      console.error("Error in getProgress:", error.message);
      res.status(500).json({ message: "Server error while fetching progress." });
    }
  };
  
  // Controller: PUT progress
  const updateProgress = async(req, res) => {
    const { student_id } = req.params;
    const updateData = req.body;
  
    try {
      const updated = await updateProgressForStudent(student_id, updateData);
  
      res.status(200).json(updated);
    } catch (error) {
      console.error("Error in updateProgress:", error.message);
      res.status(500).json({ message: "Server error while updating progress." });
    }
  };
  
export{
    getProgress,
    updateProgress
};
  