import { MapPin } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm flex justify-between items-center hover:shadow-md transition">
      <div className="flex gap-4 items-start">
        <div className="w-24 h-24 bg-gray-100 rounded-xl shrink-0" />
        <div>
          <h2 className="text-lg font-semibold">{course.title}</h2>
          <p className="text-gray-600">by Professor PoopyPants</p>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{course.desc}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <button className="border border-amber-400 text-amber-500 rounded-md px-3 py-1 hover:bg-amber-50 transition">
          Open
        </button>
        <MapPin className="text-red-500" />
      </div>
    </div>
  );
}
