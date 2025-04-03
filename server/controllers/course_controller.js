//import { supabase } from "../config/database.js"; // DB
//import { getUserById } from "../services/user.js"; // For checking instructor's role (if needed)

// Fetch a single course by its ID
const getCourseById = async (req, res) => {
    const { id } = req.params; // Get the course ID from the URL
    try {
        // Query Supabase to get the course details
        const { data: course, error } = await supabase
            .from('courses')
            .select('*')
            .eq('id', id)
            .single(); // Fetch a single row

        if (error || !course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json(course); // Return the course data
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.error(error);
    }
};

// Fetch all courses
const getAllCourses = async (req, res) => {
    try {
        // Query Supabase to get all courses
        const { data: courses, error } = await supabase
            .from('courses')
            .select('*');

        if (error || !courses) {
            return res.status(404).json({ message: "Courses not found" });
        }
        res.json(courses); // Return the list of courses
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.error(error);
    }
};

// Create a new course (Instructor only)
const createCourse = async (req, res) => {
    const { title, description, instructor_id } = req.body;

    // Validate instructor existence (optional)
    const { data: instructor, error: instructorError } = await supabase
        .from('users')
        .select('*')
        .eq('id', instructor_id)
        .single();
    
    if (instructorError || !instructor) {
        return res.status(400).json({ message: "Instructor not found" });
    }

    try {
        // Insert a new course into the 'courses' table
        const { data, error } = await supabase
            .from('courses')
            .insert([
                { title, description, instructor_id }
            ])
            .single(); // Return a single row

        if (error) {
            return res.status(400).json({ message: "Failed to create course", error });
        }

        res.status(201).json(data); // Return the newly created course
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.error(error);
    }
};

// Update course details (Instructor only)
const updateCourse = async (req, res) => {
    const { id } = req.params; // Get course ID from the URL
    const { title, description } = req.body; // Get new data from the request body

    try {
        // Check if the course exists
        const { data: course, error: courseError } = await supabase
            .from('courses')
            .select('*')
            .eq('id', id)
            .single();

        if (courseError || !course) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Update course details
        const { data, error } = await supabase
            .from('courses')
            .update({ title, description })
            .eq('id', id)
            .single();

        if (error) {
            return res.status(400).json({ message: "Failed to update course", error });
        }

        res.json(data); // Return updated course
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.error(error);
    }
};

// Delete a course (Instructor only)
const deleteCourse = async (req, res) => {
    const { id } = req.params; // Get the course ID from the URL

    try {
        // Check if the course exists
        const { data: course, error: courseError } = await supabase
            .from('courses')
            .select('*')
            .eq('id', id)
            .single();

        if (courseError || !course) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Delete the course from the 'courses' table
        const { error } = await supabase
            .from('courses')
            .delete()
            .eq('id', id);

        if (error) {
            return res.status(400).json({ message: "Failed to delete course", error });
        }

        res.status(204).json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.error(error);
    }
};

// Fetch all courses by a specific instructor
const getCoursesByInstructorId = async (req, res) => {
    const { instructor_id } = req.params;

    try {
        // Query Supabase to get courses by the instructor's ID
        const { data: courses, error } = await supabase
            .from('courses')
            .select('*')
            .eq('instructor_id', instructor_id);

        if (error || !courses) {
            return res.status(404).json({ message: "Courses not found" });
        }

        res.json(courses); // Return the courses
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.error(error);
    }
};

export { getCourseById, getAllCourses, createCourse, updateCourse, deleteCourse, getCoursesByInstructorId };
