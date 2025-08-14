// "use client";
// import { useState } from "react";
//
// interface StickyButtonProps {
//   text?: string;
//   backgroundColor?: string;
// }
//
// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   vehicle: string;
//   message: string;
// }
//
// const StickyButton: React.FC<StickyButtonProps> = ({
//   text = "Get a Quick Quotation",
//   backgroundColor = "orange",
// }) => {
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     vehicle: "",
//     message: "",
//   });
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission (send to API, email, etc.)
//     console.log("Form submitted:", formData);
//
//     // Close the form after submission
//     setIsFormOpen(false);
//
//     // Reset form data
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       vehicle: "",
//       message: "",
//     });
//   };
//
//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//
//   return (
//     <>
//       <button
//         className={`sticky left-full top-1/2 -rotate-90 text-white px-[30px] py-[20px] rounded-t-xl border-0 text-[16px] font-bold cursor-pointer -mr-[5vw] z-50`}
//         style={{ backgroundColor }}
//         onClick={() => setIsFormOpen(true)}
//         aria-label="Get a Quick Quotation"
//       >
//         {text}
//       </button>
//
//       {/* Popup Overlay */}
//       {isFormOpen && (
//         <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-blend  flex items-center justify-center p-4 z-50 transition-opacity duration-300">
//           <div
//             className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-center p-6 border-b">
//               <h3 className="text-xl font-bold text-gray-900">
//                 Get a Quick Quotation
//               </h3>
//               <button
//                 onClick={() => setIsFormOpen(false)}
//                 className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
//                 aria-label="Close form"
//               >
//                 ×
//               </button>
//             </div>
//
//             <form onSubmit={handleSubmit} className="p-6 space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   placeholder="Enter your full name"
//                 />
//               </div>
//
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   placeholder="Enter your email"
//                 />
//               </div>
//
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   placeholder="Enter your phone number"
//                 />
//               </div>
//
//               <div>
//                 <label
//                   htmlFor="vehicle"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Vehicle Information
//                 </label>
//                 <input
//                   type="text"
//                   id="vehicle"
//                   name="vehicle"
//                   value={formData.vehicle}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   placeholder="e.g., BMW N47D20A 2010"
//                 />
//               </div>
//
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={3}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   placeholder="Tell us about your engine needs..."
//                 />
//               </div>
//
//               <div className="flex gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setIsFormOpen(false)}
//                   className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   style={{ backgroundColor }}
//                   className="flex-1 px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
//
// export default StickyButton;
"use client";
import { useState } from "react";

interface StickyButtonProps {
  text?: string;
  backgroundColor?: string;
  onClick?: () => void;
  engineKey: string; // Add engineKey prop
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  message: string;
  engineKey: string; // Include engineKey in form data
}

const StickyButton: React.FC<StickyButtonProps> = ({
  text = "Get a Quick Quotation",
  backgroundColor = "orange",
  onClick,
  engineKey = "", // Default to empty string if not provided
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
    engineKey: engineKey || "", // Initialize with passed engineKey
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (send to API, email, etc.)
    console.log("Form submitted:", formData);

    // Close the form after submission
    setIsFormOpen(false);

    // Reset form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicle: "",
      message: "",
      engineKey: engineKey || "",
    });

    // Call the original onClick handler if provided
    if (onClick) {
      onClick();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <button
        className={`sticky left-full top-1/2 -rotate-90 text-white px-[30px] py-[20px] rounded-t-xl border-0 text-[16px] font-bold cursor-pointer -mr-[5vw] z-50`}
        style={{ backgroundColor }}
        onClick={() => setIsFormOpen(true)}
        aria-label="Get a Quick Quotation"
      >
        {text}
      </button>

      {/* Popup Overlay with Backdrop Blur */}
      {isFormOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300"
          onClick={() => setIsFormOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">
                Get a Quick Quotation
              </h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                aria-label="Close form"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Hidden input for engine key */}
              <input type="hidden" name="engineKey" value={engineKey} />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="vehicle"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Vehicle Information
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="e.g., BMW N47D20A 2010"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tell us about your engine needs..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ backgroundColor }}
                  className="flex-1 px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyButton;
