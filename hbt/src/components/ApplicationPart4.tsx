"use client";

import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export type EmploymentHistory = {
  employer?: string;
  startDate?: string;
  endDate?: string;
  address?: string;
  supervisor?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  fmcsr?: boolean; // Federal Motor Carrier Safety Regulations
  cfrPart40?: boolean; // 49 CFR part 40 testing
  reasonsForLeaving?: string;
};

export type ApplicationPart4Inputs = {
  employments: EmploymentHistory[];
};

interface ApplicationPart4Props {
  onFormSubmit?: (data: ApplicationPart4Inputs) => void;
  initialData?: ApplicationPart4Inputs;
}

const ApplicationPart4: React.FC<ApplicationPart4Props> = ({
  onFormSubmit,
  initialData,
}) => {
  const { control, register, handleSubmit } = useForm<ApplicationPart4Inputs>({
    defaultValues: initialData || {
      employments: [
        {
          employer: "",
          startDate: "",
          endDate: "",
          address: "",
          supervisor: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          fmcsr: false,
          cfrPart40: false,
          reasonsForLeaving: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "employments",
  });
  const maxEmployers = 3;

  return (
    <form className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Employment History
      </h2>
      <p className="text-sm text-gray-600">
        This section is optional. Provide your most recent employment.
      </p>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-md font-medium text-gray-700">
              Employer {index + 1}
            </h3>
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-sm text-red-600 hover:underline"
              disabled={fields.length <= 1}
            >
              Remove
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Employer
              </label>
              <input
                type="text"
                {...register(`employments.${index}.employer` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Supervisor
              </label>
              <input
                type="text"
                {...register(`employments.${index}.supervisor` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dates: From
              </label>
              <input
                type="date"
                {...register(`employments.${index}.startDate` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                To
              </label>
              <input
                type="date"
                {...register(`employments.${index}.endDate` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              {...register(`employments.${index}.address` as const)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                {...register(`employments.${index}.city` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                maxLength={2}
                {...register(`employments.${index}.state` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Zip
              </label>
              <input
                type="text"
                {...register(`employments.${index}.zip` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                {...register(`employments.${index}.phone` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                {...register(`employments.${index}.fmcsr` as const)}
                className="h-4 w-4"
              />
              <span>
                Were you subject to the Federal Motor Carrier Safety Regulations
                during this period?
              </span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                {...register(`employments.${index}.cfrPart40` as const)}
                className="h-4 w-4"
              />
              <span>
                Were you subject to 49 CFR part 40 controlled substance and
                alcohol testing during this period?
              </span>
            </label>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Reasons for leaving
            </label>
            <textarea
              rows={3}
              {...register(`employments.${index}.reasonsForLeaving` as const)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
      ))}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => {
            if (fields.length >= maxEmployers) return;
            append({
              employer: "",
              startDate: "",
              endDate: "",
              address: "",
              supervisor: "",
              city: "",
              state: "",
              zip: "",
              phone: "",
              fmcsr: false,
              cfrPart40: false,
              reasonsForLeaving: "",
            });
          }}
          disabled={fields.length >= maxEmployers}
          className={`border border-gray-300 font-semibold py-2 px-4 rounded-md ${
            fields.length >= maxEmployers
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-800"
          }`}
        >
          Add Employer {fields.length >= maxEmployers ? "(max 3)" : ""}
        </button>
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

export default ApplicationPart4;
