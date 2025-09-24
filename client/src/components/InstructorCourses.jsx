import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router';

const InstructorCourses = ({ userData }) => {
  return (
    <section className="">
      <div className='mt-4'>
        <Link to={'/create-course'} className='text-red-300'>Create Course</Link>

        <h2>Your courses</h2>
      </div>
    </section>
  );
};
export default InstructorCourses;
