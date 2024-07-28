import React from "react";

function CourseCard({val}) {
  return (
    <div
      className="md:max-w-96 sm:max-w-72 w-full rounded overflow-hidden shadow-lg mx-auto"
    >
      <img className="w-full" src={val.imageUrl} alt={val["course-title"]} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The {val["course-title"]}</div>
        <p className="text-gray-700 text-base"></p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{val.tag}
        </span>
      </div>
    </div>
  );
}

export default CourseCard;