"use client";

import React from "react";
import { useForm } from "react-hook-form";

type License = {
  state: string;
  number: string;
  expirationDate: string;
};

type Experience = {
  vehicleType: string;
  startDate: string;
  endDate: string;
  approxMileage: string;
};

export type ApplicationPart2Inputs = {
  license1: License;
  license2: License;
  license3: License;
  experience1: Experience;
  experience2: Experience;
  experience3: Experience;
};

interface ApplicationPart2Props {
  onFormSubmit?: (data: ApplicationPart2Inputs) => void;
}

const LicenseFields: React.FC<{
  index: number;
  register: ReturnType<typeof useForm<ApplicationPart2Inputs>>["register"];
  errors: any;
}> = ({ index, register, errors }) => {
  const field = `license${index}` as const;
  const err = errors?.[field] || {};
  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
      <h3 className="text-md font-medium text-gray-700 mb-3">
        License {index}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor={`${field}.state`}
            className="block text-sm font-medium text-gray-700"
          >
            State <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id={`${field}.state`}
            maxLength={2}
            {...register(`${field}.state` as const, {
              required: "State is required",
              maxLength: { value: 2, message: "Use 2-letter code" },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {err?.state && (
            <span className="text-red-500 text-sm">
              {err.state.message as string}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor={`${field}.number`}
            className="block text-sm font-medium text-gray-700"
          >
            Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id={`${field}.number`}
            {...register(`${field}.number` as const, {
              required: "License number is required",
              minLength: { value: 3, message: "Too short" },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {err?.number && (
            <span className="text-red-500 text-sm">
              {err.number.message as string}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor={`${field}.expirationDate`}
            className="block text-sm font-medium text-gray-700"
          >
            Expiration Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id={`${field}.expirationDate`}
            {...register(`${field}.expirationDate` as const, {
              required: "Expiration date is required",
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {err?.expirationDate && (
            <span className="text-red-500 text-sm">
              {err.expirationDate.message as string}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ApplicationPart2: React.FC<ApplicationPart2Props> = ({
  onFormSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationPart2Inputs>();

  return (
    <form className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Driver License Information
      </h2>

      {[1, 2, 3].map((i) => (
        <LicenseFields
          key={i}
          index={i as 1 | 2 | 3}
          register={register}
          errors={errors}
        />
      ))}

      <div className="mt-8 pt-4 border-t-2 border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Driving Experience
        </h2>
        {[1, 2, 3].map((i) => {
          const field = `experience${i}` as const;
          const err: any = (errors as any)?.[field] || {};
          return (
            <div
              key={field}
              className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50"
            >
              <h3 className="text-md font-medium text-gray-700 mb-3">
                Experience {i}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label
                    htmlFor={`${field}.vehicleType`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Type of vehicle driven{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={`${field}.vehicleType`}
                    {...register(`${field}.vehicleType` as const, {
                      required: "Vehicle type is required",
                      minLength: { value: 2, message: "Too short" },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {err?.vehicleType && (
                    <span className="text-red-500 text-sm">
                      {err.vehicleType.message as string}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor={`${field}.startDate`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Dates: From <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id={`${field}.startDate`}
                    {...register(`${field}.startDate` as const, {
                      required: "Start date is required",
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {err?.startDate && (
                    <span className="text-red-500 text-sm">
                      {err.startDate.message as string}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor={`${field}.endDate`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    To <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id={`${field}.endDate`}
                    {...register(`${field}.endDate` as const, {
                      required: "End date is required",
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {err?.endDate && (
                    <span className="text-red-500 text-sm">
                      {err.endDate.message as string}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor={`${field}.approxMileage`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Approx. mileage driven{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id={`${field}.approxMileage`}
                    min={0}
                    step={1}
                    {...register(`${field}.approxMileage` as const, {
                      required: "Mileage is required",
                      validate: (v) => (Number(v) >= 0 ? true : "Must be >= 0"),
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {err?.approxMileage && (
                    <span className="text-red-500 text-sm">
                      {err.approxMileage.message as string}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        onClick={handleSubmit((data) => {
          if (onFormSubmit) onFormSubmit(data);
        })}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
      >
        Next
      </button>
    </form>
  );
};

export default ApplicationPart2;
