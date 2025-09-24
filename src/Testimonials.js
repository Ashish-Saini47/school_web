import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-500">Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl,
              eget aliquam nisl nisl sit amet nisl.
            </p>
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="Student 1"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">John Doe</h4>
                <p className="text-gray-600">Student</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl,
              eget aliquam nisl nisl sit amet nisl.
            </p>
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="Parent 1"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Jane Doe</h4>
                <p className="text-gray-600">Parent</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl,
              eget aliquam nisl nisl sit amet nisl.
            </p>
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="Student 2"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Peter Jones</h4>
                <p className="text-gray-600">Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
