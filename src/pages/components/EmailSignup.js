import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
export default function Signup() {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (
        values.email === "" ||
        values.email === null ||
        values.email === undefined
      ) {
        return;
      }
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MONGODB_TOKEN}`,
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    },
  });

  return (
    <div className=" mt-6 flex flex-col ">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className="text-white mb-2 text-lg font-bold">
          Sign up to get The Most Awesome Atomic Habits Guide in The Universe
          for FREE!
        </label>{" "}
        <div className="flex flex-row items-center  sm:mt-1 mt-4">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            className={`px-2 my-2 sm:w-[300px]  w-full sm:mx-0 mx-autotransition ease-in-out delay-150 bg-white rounded-l-lg text-md text-black-500  md:text-md py-2 font-base  ${
              formik.errors.email && "border-red-500"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
            disabled={submitted} // Disable the input after successful submission
          />
          {submitted ? (
            // Display checkmark icon when submitted
            <span className="text-white  bg-gradient-to-r from-gradient-blue to-gradient-purple rounded-r-lg px-2 py-1 text-2xl">
              ✓
            </span>
          ) : (
            // Display the Sign Up button otherwise
            <button
              className=" text-white  bg-gradient-to-r from-gradient-blue to-gradient-purple rounded-r-lg px-2 my-2 text-md text-black-500 hover:-translate-y-1 hover:scale-110 md:text-md py-2 font-base"
              type="submit"
              disabled={submitted} // Disable the button after successful submission
            >
              Steal
            </button>
          )}
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-italic text-sm">
            {formik.errors.email}
          </div>
        ) : null}
      </form>
    </div>
  );
}
