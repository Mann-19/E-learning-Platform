

export default function CourseCard({ course }) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm flex justify-between items-center hover:shadow-md transition">
      <div className="flex gap-4 items-start">
       
        <div>
          <h2 className="text-lg text-yellow-600 font-semibold">{course.title}</h2>
          <p className="text-yellow-550">by {course.instructor_id}</p> {/*confirm schema with Mann here*/}
          <p className="text-sm text-yellow-600 mt-1 line-clamp-2">{course.desc}</p>
        </div>
      </div>
      
    </div>
  );
}
