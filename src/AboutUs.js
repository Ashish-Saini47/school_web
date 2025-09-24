// import React from "react";

// const AboutUs = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-green-500">About Us</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h3 className="text-2xl font-bold mb-4 text-orange-600">
//               Our History
//             </h3>
//             <p className="text-gray-600 text-justify">
//               To actualize the above enunciated noble vision of Shrimati Kiran
//               Devi Bhadupota, Honourable Founder of Karni Kripa Shikshan
//               Sansthan; Karni Kripa Shikshan Sansthan had planned to set up an
//               English Medium Senior Secondary School in the educationally remote
//               area of Mandawa, in District Jhunjhunu of Shekhawati region,
//               Rajasthan. Consequent to that resolve KARNI KRIPA SHIKSHAN
//               SANSTHAN (KKSS) has commenced its First Session in Mandawa in
//               April 2014. Our resolve is to provide value based quality
//               education to the children in a clean, healthy and cordial
//               environment with all modern facilities.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h3 className="text-2xl font-bold mb-4 text-orange-600">
//               Our Vision
//             </h3>
//             <p className="text-gray-600 text-justify">
//               Our vision is to 'To inculcate humility with manifestation of
//               perfection'. KKSS, Mandawa commits itself for preparing students
//               as life-long learners, full of character and zeal. We commit
//               ourselves to holistic education. Our Mission is to provide quality
//               education with a goal to nurture creativity and help students
//               realize their full potential. We aim to encourage the quest of
//               knowledge, imagination and effort amongst the students and expose
//               them to a wide spectrum of multi-disciplinary learning. In
//               upcoming years the School will improve reading habits of all the
//               students and in next five years the school will ensure improved
//               learning levels of the students in all the classes in all
//               subjects.
//             </p>
//           </div>
//         </div>
//         <div className="pt-20">
//           <h3 className="text-2xl font-bold text-center mb-8 text-green-500">
//             Our Founders
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
//             <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 pb-16 pt-32 w-64 h-80 mx-auto flex flex-col items-center justify-center">
//               <div className="absolute -top-20 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                 <img
//                   src="/images/Founder.jpeg"
//                   alt="Founder"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h4 className="text-xl font-bold mt-4 text-orange-600 text-center">
//                 Mrs. Kiran Devi Bhadupota
//               </h4>
//               <p className="text-gray-600">Founder</p>
//               <hr className="w-1/2 my-2 border-gray-300" />
//               <p className="text-xs text-gray-500 text-center">
//                 "I have immense pleasure in welcoming you to Karni Kripa
//                 Shikshan Sansthan - Mandawa a highly progressive and
//                 enterprising school dedicated to providing total quality
//                 education with special emphasis on traditional values"
//               </p>
//             </div>

//             <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 pb-16 pt-32 w-64 h-80 mx-auto flex flex-col items-center justify-center">
//               <div className="absolute -top-20 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                 <img
//                   src="/images/Director.jpeg"
//                   alt="Director"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h4 className="text-xl font-bold mt-4 text-orange-600 text-center">
//                 Shri . Ganesh Singh Shekhawat
//               </h4>
//               <p className="text-gray-600">Director</p>
//               <hr className="w-1/2 my-2 border-gray-300" />
//               <p className="text-xs text-gray-500 text-center">
//                 "Education is the right of each and every child, irrespective of
//                 caste, creed and religion. KKSS welcomes all the students to
//                 harness their capabilities and potential not only in academic
//                 skills but also in life values and vocational skills."
//               </p>
//             </div>
//             <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 pb-16 pt-32 w-64 h-80 mx-auto flex flex-col items-center justify-center">
//               <div className="absolute -top-20 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                 <img
//                   src="/images/acdamic_director.jpeg"
//                   alt="Academic Director"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h4 className="text-xl font-bold mt-4 text-orange-600 text-center">
//                 Dr. Dishant Meena
//               </h4>
//               <p className="text-gray-600">Academic Director</p>
//               <hr className="w-1/2 my-2 border-gray-300" />
//               <p className="text-xs text-gray-500 text-center">
//                 "I am delighted to welcome you to Karni Kripa Shikshan Sansthan
//                 - Mandawa. Our Core Aspiration is to provide an Educational
//                 Excellence, in that every student makes a positive difference
//                 during the time with us. "
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;



import React, { useState, useEffect } from 'react';
import { Users, Award, BookOpen, Eye, Target, Calendar } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder",
      image: "/images/Founder.jpeg",
      description: "Visionary educator with 20+ years of experience in transforming educational landscapes.",
      color: "from-green-400 to-emerald-600"
    },
    {
      name: "Michael Chen",
      role: "Director",
      image: "/images/Director.jpeg",
      description: "Strategic leader focused on operational excellence and innovative program development.",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Prof. Elena Rodriguez",
      role: "Academic Director",
      image: "/images/acdamic_director.jpeg",
      description: "Curriculum specialist dedicated to fostering academic excellence and student growth.",
      color: "from-emerald-400 to-green-600"
    }
  ];

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-gray-50 to-green-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            About Our School
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Vision and History Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
              <div className="flex items-center text-white">
                <Eye className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the leading educational institution that nurtures innovative minds, fosters creativity, and empowers students to become global leaders who make meaningful contributions to society.
              </p>
              <div className="mt-4 flex items-center text-green-600">
                <Target className="w-5 h-5 mr-2" />
                <span className="font-semibold">Excellence • Innovation • Leadership</span>
              </div>
            </div>
          </div>

          {/* History Card */}
          <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-6">
              <div className="flex items-center text-white">
                <Calendar className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold">Our History</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Founded in 1985, our institution has been at the forefront of educational excellence for nearly four decades. From humble beginnings with just 50 students, we've grown into a prestigious academy serving over 2,000 students.
              </p>
              <div className="flex items-center justify-between text-green-600 font-semibold">
                <span>Est. 1985</span>
                <span>2,000+ Students</span>
                <span>40+ Awards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">The visionary minds shaping the future of education</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  activeCard === index ? 'ring-4 ring-green-400' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Profile Image with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-green-500 font-semibold">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    {member.description}
                  </p>
                  
                  {/* Animated Bottom Border */}
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${member.color} transform transition-transform duration-500 ${
                      activeCard === index ? 'translate-x-0' : '-translate-x-full'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section
        <div className={`mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-transform duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">38+</div>
              <div className="text-green-100">Years of Excellence</div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">2,000+</div>
              <div className="text-green-100">Students Served</div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-green-100">Expert Faculty</div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
          </div>
        </div> */}

        {/* Floating Animation Elements */}
        <div className="fixed top-20 right-10 opacity-10">
          <BookOpen className="w-32 h-32 text-green-500 animate-pulse" />
        </div>
        <div className="fixed bottom-20 left-10 opacity-10">
          <Award className="w-24 h-24 text-emerald-500 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;