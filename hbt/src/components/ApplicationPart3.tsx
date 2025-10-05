"use client";

import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export type Violation = {
  date: string;
  violation: string;
  state: string;
  commercialVehicle: boolean;
};

export type ApplicationPart3Inputs = {
  violations: Violation[];
};

interface ApplicationPart3Props {
  onFormSubmit?: (data: ApplicationPart3Inputs) => void;
  initialData?: ApplicationPart3Inputs;
}

const ApplicationPart3: React.FC<ApplicationPart3Props> = ({
  onFormSubmit,
  initialData,
}) => {
  const MAX_VIOLATIONS = 8;
  const { control, register, handleSubmit } = useForm<ApplicationPart3Inputs>({
    defaultValues: initialData || {
      violations: [
        { date: "", violation: "", state: "", commercialVehicle: false },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "violations",
  });

  return (
    <form className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Traffic Violations
      </h2>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label
                htmlFor={`violations.${index}.date`}
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id={`violations.${index}.date`}
                {...register(`violations.${index}.date` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor={`violations.${index}.violation`}
                className="block text-sm font-medium text-gray-700"
              >
                Violation
              </label>
              <input
                type="text"
                id={`violations.${index}.violation`}
                {...register(`violations.${index}.violation` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor={`violations.${index}.state`}
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id={`violations.${index}.state`}
                maxLength={2}
                {...register(`violations.${index}.state` as const)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Commercial vehicle
              </label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`violations.${index}.commercialVehicle`}
                  {...register(
                    `violations.${index}.commercialVehicle` as const
                  )}
                  className="h-4 w-4"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="ml-4 text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => {
            if (fields.length >= MAX_VIOLATIONS) return;
            append({
              date: "",
              violation: "",
              state: "",
              commercialVehicle: false,
            });
          }}
          disabled={fields.length >= MAX_VIOLATIONS}
          className={`border border-gray-300 font-semibold py-2 px-4 rounded-md ${
            fields.length >= MAX_VIOLATIONS
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-800"
          }`}
        >
          Add Violation {fields.length >= MAX_VIOLATIONS ? "(max 8)" : ""}
        </button>
        <button
          type="submit"
          onClick={handleSubmit((data) => {
            if (onFormSubmit) onFormSubmit(data);
          })}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
        >
          Finish
        </button>
      </div>
    </form>
  );
};

export default ApplicationPart3;
