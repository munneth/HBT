"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  date: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  dateOfBirth: string;
  homeTelephone: string;
  cellularTelephone: string;
  socialSecurityNumber: string;
  prevAddress1Street: string;
  prevAddress1City: string;
  prevAddress1State: string;
  prevAddress1Zip: string;
  prevAddress1DatesFrom: string;
  prevAddress1DatesTo: string;
  prevAddress2Street: string;
  prevAddress2City: string;
  prevAddress2State: string;
  prevAddress2Zip: string;
  prevAddress2DatesFrom: string;
  prevAddress2DatesTo: string;
  prevAddress3Street: string;
  prevAddress3City: string;
  prevAddress3State: string;
  prevAddress3Zip: string;
  prevAddress3DatesFrom: string;
  prevAddress3DatesTo: string;
};

interface ApplicationPart1Props {
  onFormSubmit?: (data: FormInputs) => void;
  initialData?: Partial<FormInputs>;
}

const ApplicationPart1: React.FC<ApplicationPart1Props> = ({
  onFormSubmit,
  initialData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues: initialData });

  return (
    <form className="space-y-6">
      {/* Personal Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date: <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="date"
            {...register("date", {
              required: "Date is required",
              validate: (value) => {
                const inputDate = new Date(value);
                const today = new Date();
                if (inputDate > today) {
                  return "Date cannot be in the future";
                }
                return true;
              },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.date && (
            <span className="text-red-500 text-sm">{errors.date.message}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            Name: First <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters",
              },
              maxLength: {
                value: 50,
                message: "First name must be 50 characters or less",
              },
              pattern: {
                value: /^[a-zA-Z\s'-]+$/,
                message:
                  "First name can only contain letters, spaces, hyphens, and apostrophes",
              },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="middleName"
            className="block text-sm font-medium text-gray-700"
          >
            Middle
          </label>
          <input
            type="text"
            id="middleName"
            {...register("middleName")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "Last name must be at least 2 characters",
              },
              maxLength: {
                value: 50,
                message: "Last name must be 50 characters or less",
              },
              pattern: {
                value: /^[a-zA-Z\s'-]+$/,
                message:
                  "Last name can only contain letters, spaces, hyphens, and apostrophes",
              },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="address"
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 5,
              message: "Address must be at least 5 characters",
            },
            maxLength: {
              value: 100,
              message: "Address must be 100 characters or less",
            },
          })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.address && (
          <span className="text-red-500 text-sm">{errors.address.message}</span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            {...register("city", {
              required: "City is required",
              minLength: {
                value: 2,
                message: "City must be at least 2 characters",
              },
              maxLength: {
                value: 25,
                message: "City must be 25 characters or less",
              },
              pattern: {
                value: /^[a-zA-Z\s'-]+$/,
                message:
                  "City can only contain letters, spaces, hyphens, and apostrophes",
              },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.city && (
            <span className="text-red-500 text-sm">{errors.city.message}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="state"
            {...register("state", {
              required: "please enter your State of residence",
              maxLength: {
                value: 2,
                message: "State must be 2 characters or less",
              },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.state && (
            <span className="text-red-500 text-sm">{errors.state.message}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-medium text-gray-700"
          >
            Zip <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="zip"
            aria-invalid={errors.zip ? "true" : "false"}
            {...register("zip", {
              required: "Zip code is required",
              maxLength: {
                value: 5,
                message: "Zip code must be 5 digits or less",
              },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />

          {errors.zip && (
            <span className="text-red-500 text-sm">{errors.zip.message}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth: <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="dateOfBirth"
            {...register("dateOfBirth", {
              required: "Date of birth is required",
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.dateOfBirth && (
            <span className="text-red-500 text-sm">
              {errors.dateOfBirth.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="homeTelephone"
            className="block text-sm font-medium text-gray-700"
          >
            Home telephone: <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="homeTelephone"
            {...register("homeTelephone", {
              required: "Home telephone number is required",
              pattern: {
                value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                message:
                  "Please enter a valid phone number (e.g., (555) 123-4567)",
              },
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
            })}
            placeholder="(555)-123-4567"
            maxLength={14}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.homeTelephone && (
            <span className="text-red-500 text-sm">
              {errors.homeTelephone.message}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="cellularTelephone"
            className="block text-sm font-medium text-gray-700"
          >
            Cellular telephone:
          </label>
          <input
            type="tel"
            id="cellularTelephone"
            {...register("cellularTelephone")}
            placeholder="(555)-123-4567"
            maxLength={14}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="socialSecurityNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Social Security Number: <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="socialSecurityNumber"
            {...register("socialSecurityNumber", {
              required: "Social Security Number is required",
              pattern: {
                value: /^[0-9]{9}$/,
                message: "SSN must be exactly 9 digits",
              },
              validate: (value) => {
                // Check for invalid SSN patterns
                const invalidPatterns = [
                  /^0{3}-?0{2}-?0{4}$/, // 000-00-0000
                  /^1{3}-?1{2}-?1{4}$/, // 111-11-1111
                  /^2{3}-?2{2}-?2{4}$/, // 222-22-2222
                  /^3{3}-?3{2}-?3{4}$/, // 333-33-3333
                  /^4{3}-?4{2}-?4{4}$/, // 444-44-4444
                  /^5{3}-?5{2}-?5{4}$/, // 555-55-5555
                  /^6{3}-?6{2}-?6{4}$/, // 666-66-6666
                  /^7{3}-?7{2}-?7{4}$/, // 777-77-7777
                  /^8{3}-?8{2}-?8{4}$/, // 888-88-8888
                  /^9{3}-?9{2}-?9{4}$/, // 999-99-9999
                ];

                if (invalidPatterns.some((pattern) => pattern.test(value))) {
                  return "Please enter a valid Social Security Number";
                }
                return true;
              },
            })}
            placeholder="123456789"
            maxLength={9}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.socialSecurityNumber && (
            <span className="text-red-500 text-sm">
              {errors.socialSecurityNumber.message}
            </span>
          )}
          <p className="text-xs text-blue-600 mt-1">
            Note: Omit dashes (enter as 9 digits only)
          </p>
        </div>
      </div>

      {/* Previous Address History Section */}
      <div className="mt-8 pt-4 border-t-2 border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          If your above address is less than 3 years continue listing them below
          to cover the previous 3 year period:
        </h2>

        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50"
          >
            <h3 className="text-md font-medium text-gray-700 mb-3">
              Previous Address {index}
            </h3>
            <div>
              <label
                htmlFor={`prevAddress${index}Street`}
                className="block text-sm font-medium text-gray-700"
              >
                Street
              </label>
              <input
                type="text"
                id={`prevAddress${index}Street`}
                {...register(`prevAddress${index}Street` as keyof FormInputs)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label
                  htmlFor={`prevAddress${index}City`}
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id={`prevAddress${index}City`}
                  {...register(`prevAddress${index}City` as keyof FormInputs)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor={`prevAddress${index}State`}
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  id={`prevAddress${index}State`}
                  {...register(`prevAddress${index}State` as keyof FormInputs)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor={`prevAddress${index}Zip`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip
                </label>
                <input
                  type="text"
                  id={`prevAddress${index}Zip`}
                  {...register(`prevAddress${index}Zip` as keyof FormInputs)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor={`prevAddress${index}DatesFrom`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Dates: From
                </label>
                <input
                  type="date"
                  id={`prevAddress${index}DatesFrom`}
                  {...register(
                    `prevAddress${index}DatesFrom` as keyof FormInputs
                  )}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor={`prevAddress${index}DatesTo`}
                  className="block text-sm font-medium text-gray-700"
                >
                  To
                </label>
                <input
                  type="date"
                  id={`prevAddress${index}DatesTo`}
                  {...register(
                    `prevAddress${index}DatesTo` as keyof FormInputs
                  )}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="submit"
        onClick={handleSubmit((data) => {
          console.log("Form Data HashMap:", data);
          if (onFormSubmit) {
            onFormSubmit(data);
          }
        })}
      >
        Next
      </button>
    </form>
  );
};

export default ApplicationPart1;
