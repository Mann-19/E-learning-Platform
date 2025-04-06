import supabase from '../config/database.js';

// Get a single course by ID
export async function getCourseById(courseId) {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single();
    
    if (error) throw new Error(`Error fetching course: ${error.message}`);
    return data;
}

// Get all courses
export async function getAllCourses() {
    const { data, error } = await supabase
        .from('courses')
        .select('*');
    
    if (error) throw new Error(`Error fetching courses: ${error.message}`);
    return data;
}

// Create a new course
export async function createCourse(courseData) {
    const { data, error } = await supabase
        .from('courses')
        .insert([courseData]) // Wrap in an array as Supabase expects
        .select()
        .single();
    
    if (error) throw new Error(`Error creating course: ${error.message}`);
    return data;
}

// Update a course by ID
export async function updateCourse(courseId, courseData) {
    const { data, error } = await supabase
        .from('courses')
        .update(courseData)
        .eq('id', courseId)
        .select()
        .single();
    
    if (error) throw new Error(`Error updating course: ${error.message}`);
    return data;
}

// Delete a course by ID
export async function deleteCourse(courseId) {
    const { error } = await supabase
        .from('courses')
        .delete()
        .eq('id', courseId);
    
    if (error) throw new Error(`Error deleting course: ${error.message}`);
    return { message: 'Course deleted successfully' };
}

// Get all courses by a specific instructor
export async function getCoursesByInstructorId(instructorId) {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('instructor_id', instructorId);
    
    if (error) throw new Error(`Error fetching courses: ${error.message}`);
    return data;
}
