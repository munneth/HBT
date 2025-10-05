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

type Accident = {
  date: string;
  description: string;
  fatalities: string;
  injuries: string;
};

export type ApplicationPart2Inputs = {
  license1: License;
  license2: License;
  license3: License;
  experience1: Experience;
  experience2: Experience;
  experience3: Experience;
  accident1: Accident;
  accident2: Accident;
  accident3: Accident;
};

interface ApplicationPart2Props {
  onFormSubmit?: (data: ApplicationPart2Inputs) => void;
  initialData?: Partial<ApplicationPart2Inputs>;
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
            State
          </label>
          <input
            type="text"
            id={`${field}.state`}
            maxLength={2}
            {...register(`${field}.state` as const, {
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
            Number
          </label>
          <input
            type="text"
            id={`${field}.number`}
            {...register(`${field}.number` as const, {
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
            Expiration Date
          </label>
          <input
            type="date"
            id={`${field}.expirationDate`}
            {...register(`${field}.expirationDate` as const)}
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
  initialData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<ApplicationPart2Inputs>({ defaultValues: initialData as any });

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
                    Type of vehicle driven
                  </label>
                  <input
                    type="text"
                    id={`${field}.vehicleType`}
                    {...register(`${field}.vehicleType` as const)}
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
                    Dates: From
                  </label>
                  <input
                    type="date"
                    id={`${field}.startDate`}
                    {...register(`${field}.startDate` as const)}
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
                    To
                  </label>
                  <input
                    type="date"
                    id={`${field}.endDate`}
                    {...register(`${field}.endDate` as const)}
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
                    Approx. mileage driven
                  </label>
                  <input
                    type="number"
                    id={`${field}.approxMileage`}
                    min={0}
                    step={1}
                    {...register(`${field}.approxMileage` as const)}
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

      <div className="mt-8 pt-4 border-t-2 border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          All Accidents
        </h2>
        {[1, 2, 3].map((i) => {
          const field = `accident${i}` as const;
          const err: any = (errors as any)?.[field] || {};
          return (
            <div
              key={field}
              className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50"
            >
              <h3 className="text-md font-medium text-gray-700 mb-3">
                Accident {i}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label
                    htmlFor={`${field}.date`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id={`${field}.date`}
                    {...register(`${field}.date` as const)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {err?.date && (
                    <span className="text-red-500 text-sm">
                      {err.date.message as string}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor={`${field}.description`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id={`${field}.description`}
                    {...register(`${field}.description` as const)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {err?.description && (
                    <span className="text-red-500 text-sm">
                      {err.description.message as string}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor={`${field}.fatalities`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fatalities
                  </label>
                  <input
                    type="number"
                    id={`${field}.fatalities`}
                    min={0}
                    step={1}
                    {...register(`${field}.fatalities` as const)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {err?.fatalities && (
                    <span className="text-red-500 text-sm">
                      {err.fatalities.message as string}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor={`${field}.injuries`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Injuries
                  </label>
                  <input
                    type="number"
                    id={`${field}.injuries`}
                    min={0}
                    step={1}
                    {...register(`${field}.injuries` as const)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {err?.injuries && (
                    <span className="text-red-500 text-sm">
                      {err.injuries.message as string}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {((errors as any)?.license1?.state?.message ||
        (errors as any)?.license2?.state?.message ||
        (errors as any)?.license3?.state?.message) && (
        <p className="text-red-600 text-sm">
          {((errors as any)?.license1?.state?.message as string) ||
            ((errors as any)?.license2?.state?.message as string) ||
            ((errors as any)?.license3?.state?.message as string)}
        </p>
      )}

      <button
        type="submit"
        onClick={handleSubmit((data) => {
          const licenses = [data.license1, data.license2, data.license3];
          const anyFieldProvided = licenses.some(
            (l) =>
              (l.state && l.state.trim() !== "") ||
              (l.number && l.number.trim() !== "") ||
              (l.expirationDate && l.expirationDate !== "")
          );
          if (!anyFieldProvided) {
            setError("license1.state" as any, {
              type: "manual",
              message:
                "At least one license is required (state, number, expiration)",
            });
            return;
          }
          const anyComplete = licenses.some(
            (l) =>
              l.state &&
              l.state.trim() !== "" &&
              l.number &&
              l.number.trim() !== "" &&
              l.expirationDate &&
              l.expirationDate !== ""
          );
          if (!anyComplete) {
            setError("license1.state" as any, {
              type: "manual",
              message:
                "Please complete one license: state, number, and expiration",
            });
            return;
          }
          clearErrors();
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
