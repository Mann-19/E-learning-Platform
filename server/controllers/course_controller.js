import {
    getCourseById as fetchCourseById,
    getAllCourses as fetchAllCourses,
    createCourse as addCourse,
    updateCourse as modifyCourse,
    deleteCourse as removeCourse,
    getCoursesByInstructorId as fetchCoursesByInstructor
} from '../services/course.js';

/**
 * @desc Get a single course by its ID
 * @route GET /api/courses/:id
 */
const getCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await fetchCourseById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * @desc Get all available courses
 * @route GET /api/courses
 */
const getCourses = async (req, res) => {
    try {
        const courses = await fetchAllCourses();
        res.json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * @desc Create a new course
 * @route POST /api/courses
 */
const createNewCourse = async (req, res) => {
    const { title, description, instructor_id } = req.body;

    try {
        // Basic validation
        if (!title || !description || !instructor_id) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newCourse = await addCourse({ title, description, instructor_id });
        res.status(201).json(newCourse);
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * @desc Update an existing course by ID
 * @route PUT /api/courses/:id
 */
const updateCourseDetails = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const updatedCourse = await modifyCourse(id, { title, description });
        res.json(updatedCourse);
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * @desc Delete a course by ID
 * @route DELETE /api/courses/:id
 */
const deleteCourseById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await removeCourse(id);
        res.status(200).json(result); // returns a message
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * @desc Get all courses created by a specific instructor
 * @route GET /api/courses/instructor/:instructor_id
 */
const getCoursesByInstructor = async (req, res) => {
    const { instructor_id } = req.params;

    try {
        const instructorCourses = await fetchCoursesByInstructor(instructor_id);
        res.json(instructorCourses);
    } catch (error) {
        console.error('Error fetching instructor courses:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export {
    getCourse,
    getCourses,
    createNewCourse,
    updateCourseDetails,
    deleteCourseById,
    getCoursesByInstructor
};

