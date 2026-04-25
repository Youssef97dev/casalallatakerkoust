"use client";

import { useRef, useState } from "react";

export default function Career() {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(""); // Resets if the user cancels
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    const formData = new FormData(e.currentTarget);

    try {
      // Point this directly to your PHP file on cPanel
      const response = await fetch(
        "https://lesalamamarrakech.com/api/apply.php",
        {
          method: "POST",
          body: formData,
          // DO NOT set 'Content-Type' manually. The browser does it for FormData.
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({
          type: "success",
          text: "Your application has been sent successfully. We will be in touch soon!",
        });
        e.target.reset();
      } else {
        throw new Error(result.error || "Failed to send");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatusMessage({
        type: "error",
        text: error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setFileName("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 pt-20 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8 sm:p-10 border border-stone-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-light tracking-tight text-stone-900 sm:text-4xl">
            Join the Team
          </h2>
          <p className="mt-2 text-sm text-stone-500">
            Take the next step in your hospitality career. Fill out the details
            below.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-stone-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                required
                className="mt-1 block w-full rounded-md border border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 transition-colors"
                //placeholder="First name"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-stone-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                required
                className="mt-1 block w-full rounded-md border border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 transition-colors"
                //placeholder="Doe"
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-stone-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="mt-1 block w-full rounded-md border border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 transition-colors"
                placeholder="+212 600 000 000"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-stone-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 transition-colors"
                //placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Position Select */}
          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium text-stone-700"
            >
              Position of Interest
            </label>
            <select
              name="position"
              id="position"
              required
              className="mt-1 block w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 transition-colors"
            >
              <option value="" disabled selected>
                Select a position...
              </option>
              <option value="Chef / Kitchen Staff">Chef / Kitchen Staff</option>
              <option value="Bartender / Mixologist">
                Bartender / Mixologist
              </option>
              <option value="Waitstaff / Server">Waitstaff / Server</option>
              <option value="Host / Hostess">Host / Hostess</option>
              <option value="Management">Management</option>
            </select>
          </div>

          {/* CV Upload */}
          <div>
            <label
              htmlFor="cv_file"
              className="block text-sm font-medium text-stone-700"
            >
              Upload CV (PDF, DOCX)
            </label>
            <div
              className={`mt-1 flex justify-center rounded-md border-2 border-dashed px-6 pt-5 pb-6 transition-colors ${
                fileName
                  ? "border-amber-700 bg-amber-50"
                  : "border-stone-300 bg-stone-50 hover:border-amber-700"
              }`}
            >
              <div className="space-y-1 text-center">
                {/* SVG Icon changes color if a file is selected */}
                <svg
                  className={`mx-auto h-12 w-12 ${
                    fileName ? "text-amber-600" : "text-stone-400"
                  }`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="flex text-sm text-stone-600 justify-center">
                  <label
                    htmlFor="cv_file"
                    className="relative cursor-pointer rounded-md bg-transparent font-medium text-amber-700 focus-within:outline-none hover:text-amber-800"
                  >
                    {/* THIS IS THE MAGIC LINE: Conditionally render the file name or default text */}
                    <span className="break-all">
                      {fileName ? fileName : "Upload a file"}
                    </span>

                    <input
                      id="cv_file"
                      name="cv_file"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange} // Attach the handler here
                    />
                  </label>
                </div>

                {/* Change helper text if a file is uploaded */}
                <p className="text-xs text-stone-500">
                  {fileName
                    ? "Click to choose a different file"
                    : "PDF or Word Documents up to 10MB"}
                </p>
              </div>
            </div>
          </div>

          {/* Status Messages */}
          {statusMessage.text && (
            <div
              className={`p-4 rounded-md text-sm ${
                statusMessage.type === "success"
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stone-900 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700 transition-colors disabled:bg-stone-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending Application...
                </span>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
