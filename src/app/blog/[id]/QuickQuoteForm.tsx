/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState } from "react";
import submitForm, { FormState } from "@/app/actions/submitForm"; // import default action plus type

export default function QuickQuoteForm() {
  const initialState: FormState = { success: false, message: "" };
  const [state, formAction] = useActionState(submitForm, initialState);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Quick Engine Quote - No Obligation
      </h3>
      <p className="text-xs text-gray-600 mb-4">
        We compare prices from trusted UK engine suppliers
      </p>

      <form action={formAction} className="space-y-3">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Enter Your Name"
          />
        </div>

        {/* Mobile */}
        <div>
          <label
            htmlFor="mobile"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Mobile No. *
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Enter Your Mobile Number"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Enter Your Email"
          />
        </div>

        {/* Vehicle Details */}
        <div>
          <label
            htmlFor="vehicle"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Your Vehicle Details (Optional)
          </label>
          <textarea
            id="vehicle"
            name="data"
            rows={3}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Your Car Engine or Make/Model or Engine Info (Optional)"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition font-medium text-sm"
        >
          Request A Quote
        </button>

        {/* Status Message */}
        {state.message && (
          <p
            className={`text-xs mt-2 ${state.success ? "text-green-600" : "text-red-600"
              }`}
          >
            {state.message}
          </p>
        )}

        <p className="text-xs text-gray-500 mt-2">
          100% free, no obligation - we&apos;ll get back to you within hours.
        </p>
      </form>
    </div>
  );
}
