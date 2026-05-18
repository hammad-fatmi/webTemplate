"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Disclosure,
  Transition,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";

export function PopupWidget() {
  // ======================
  // STATES
  // ======================
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const [localComments, setLocalComments] = useState<
    { name: string; message: string }[]
  >([]);

  // ======================
  // FORM
  // ======================
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  // ======================
  // LOAD COMMENTS (MONGODB)
  // ======================
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comments");
        const data = await res.json();
        setLocalComments(data);
      } catch (err) {
        console.log("Failed to load comments", err);
      }
    };

    fetchComments();
  }, []);

  // ======================
  // SUBMIT COMMENT
  // ======================
  const onSubmit = async (data: any, e: any) => {
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      setLocalComments((prev) => [
        { name: result.name, message: result.message },
        ...prev,
      ]);

      setIsSuccess(true);
      setMessage("Comment saved successfully 🚀");

      e.target.reset();
      reset();
    } catch (err) {
      console.log(err);
      setIsSuccess(false);
      setMessage("Something went wrong");
    }
  };

  // ======================
  // UI
  // ======================
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            {/* BUTTON */}
            <DisclosureButton className="fixed z-40 right-5 bottom-5 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg flex items-center justify-center hover:scale-110 transition">
              <span className="sr-only">Open</span>

              {!open ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              )}
            </DisclosureButton>

            {/* PANEL */}
            <Transition>
              <DisclosurePanel className="fixed z-50 right-5 bottom-[100px] w-[360px] h-[650px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
                
                {/* HEADER */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-center">
                  <h3 className="text-white text-lg font-semibold">
                    Drop a Comment
                  </h3>
                  <p className="text-white/70 text-sm">
                    We usually respond in a few hours
                  </p>
                </div>

                {/* FORM AREA */}
                <div className="flex-1 p-5 overflow-auto bg-gray-50">

                  {/* FORM */}
                  {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)}>

                      <input
                        placeholder="Full Name"
                        {...register("name", { required: true })}
                        className="w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-indigo-400"
                      />

                      <input
                        placeholder="Email"
                        {...register("email", { required: true })}
                        className="w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-indigo-400"
                      />

                      <textarea
                        placeholder="Message"
                        {...register("message", { required: true })}
                        className="w-full p-2 mb-3 border rounded h-24 focus:ring-2 focus:ring-indigo-400"
                      />

                      <button
                        type="submit"
                        className="w-full py-3 text-white rounded bg-gradient-to-r from-indigo-500 to-pink-500 hover:scale-[1.02] transition"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}

                  {/* SUCCESS */}
                  {isSubmitSuccessful && isSuccess && (
                    <div className="text-center mt-10">
                      <h3 className="text-green-600 font-semibold">
                        Success 🎉
                      </h3>
                      <p className="text-sm">{message}</p>
                      <button
                        onClick={() => reset()}
                        className="mt-4 text-indigo-600"
                      >
                        Go back
                      </button>
                    </div>
                  )}

                  {/* ERROR */}
                  {isSubmitSuccessful && !isSuccess && (
                    <div className="text-center mt-10">
                      <h3 className="text-red-500 font-semibold">Failed</h3>
                      <p className="text-sm">{message}</p>
                    </div>
                  )}

                  {/* COMMENTS DISPLAY */}
                  <div className="mt-8">
                    <h3 className="font-semibold mb-3">
                      Community Feedback
                    </h3>

                    {localComments.length === 0 && (
                      <p className="text-sm text-gray-400">
                        No comments yet — be the first 🚀
                      </p>
                    )}

                    <div className="space-y-3">
                      {localComments.map((c, i) => (
                        <div
                          key={i}
                          className="p-3 bg-white border rounded shadow-sm"
                        >
                          <p className="font-medium text-sm">{c.name}</p>
                          <p className="text-xs text-gray-600">
                            {c.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}