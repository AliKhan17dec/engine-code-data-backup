import { submitQuotationForm } from "@/app/actions/contact";
import ToggleForm from "./ToggleForm";

interface StickyButtonProps {
  text?: string;
  backgroundColor?: string;
  engineCode: string;
}

export default function StickyButton({
  text = "Get a Quick Quotation",
  backgroundColor = "orange",
  engineCode = "",
}: StickyButtonProps) {
  return (
    <>
      <button
        id="open-quotation-btn"
        className="fixed top-1/2 right-0 -translate-y-1/2 translate-x-1/3 -rotate-90
             text-white px-6 py-3 md:px-[30px] md:py-[20px] rounded-t-xl border-0 
             text-xs md:text-[16px] font-bold cursor-pointer z-50 transition-all duration-300"
        style={{ backgroundColor }}
        aria-label="Get a Quick Quotation"
      >
        {text}
      </button>
      <div
        id="quotation-overlay"
        className="hidden fixed inset-0 bg-black/40 text-black backdrop-blur-sm items-center justify-center p-4 z-50 transition-opacity duration-300"
      >
        <div
          className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          id="quotation-popup"
        >
          <div className="flex justify-between items-center p-6 border-b">
            <h3 className="text-xl font-bold text-gray-900">
              Get a Quick Quotation
            </h3>
            <button
              id="close-quotation-btn"
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              aria-label="Close form"
            >
              ×
            </button>
          </div>

          <form action={submitQuotationForm} className="p-6 space-y-4">
            <input type="hidden" name="engineCode" value={engineCode} />
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border ring-1 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border rounded-md ring-1  focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border rounded-md ring-1  focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full px-3 py-2 border rounded-md ring-1  focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                id="cancel-quotation-btn"
                className="flex-1 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                id="submit-quotation-btn"
                style={{ backgroundColor }}
                className="flex-1 px-4 py-2 text-white rounded-md hover:opacity-90"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Inline script for toggling */}
      <ToggleForm />
    </>
  );
}
