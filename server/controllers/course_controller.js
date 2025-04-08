import {
  getCourseById,
  getAllCourses,
  createNewCourse,
  updateCourseById,
  deleteCourseById,
  getCoursesByInstructorId,
} from "../services/course.js";

const getCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await getCourseById(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await getAllCourses();

    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);

    res.status(500).json({ message: "Server Error" });
  }
};

const createCourse = async (req, res) => {
  const { created_at, title, desc, created_by, category, total_duration } = req.body;

  try {
    const newCourse = await createNewCourse({
      created_at,
      title,
      desc,
      created_by,
      category,
      total_duration,
    });

    res.status(201).json(newCourse);
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedCourse = await updateCourseById(id, data);

    res.json(updatedCourse);
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteCourseById(id);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getCoursesByInstructor = async (req, res) => {
  const { instructor_id } = req.params;

  try {
    const instructorCourses = await getCoursesByInstructorId(instructor_id);
    res.json(instructorCourses);
  } catch (error) {
    console.error("Error fetching instructor courses:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export {
  getCourse,
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getCoursesByInstructor,
};
