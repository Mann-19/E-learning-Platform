export default function CourseCard({ course, role, onEnroll }) {
  const handleEnrollClick = () => {
    onEnroll(course.id);
  }

  return (
    <div className="max-w-md rounded-xl overflow-hidden shadow-lg bg-white border-l-4 border-yellow-400 p-6 m-4 transition-transform hover:scale-105 hover:shadow-xl">
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-gray-800 mb-2">
          {course.title}
        </h2>
        <p className="text-gray-600 text-base">{course.description}</p>
      </div>
      <div className="pt-4 mt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Created by:{" "}
          <span className="font-mono bg-yellow-100 text-yellow-800 py-1 px-2 rounded-md">
            {course.instructor_id}
            {course.role}
          </span>
        </p>
      </div>

      {/* Conditional button for learners */}
      {role === "Learner" && (
        <div className="mt-6">
          <button
            onClick={handleEnrollClick}
            className="w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      )}
    </div>
  );
}
