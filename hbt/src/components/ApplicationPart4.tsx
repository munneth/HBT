"use client";

import React from "react";
import { useForm } from "react-hook-form";

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
  employment1: EmploymentHistory;
};

interface ApplicationPart4Props {
  onFormSubmit?: (data: ApplicationPart4Inputs) => void;
  initialData?: ApplicationPart4Inputs;
}

const ApplicationPart4: React.FC<ApplicationPart4Props> = ({
  onFormSubmit,
  initialData,
}) => {
  const { register, handleSubmit } = useForm<ApplicationPart4Inputs>({
    defaultValues: initialData || {
      employment1: {
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
    },
  });

  return (
    <form className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Employment History
      </h2>
      <p className="text-sm text-gray-600">
        This section is optional. Provide your most recent employment.
      </p>

      <div className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
        <h3 className="text-md font-medium text-gray-700 mb-3">Employer 1</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="employment1.employer"
              className="block text-sm font-medium text-gray-700"
            >
              Employer
            </label>
            <input
              id="employment1.employer"
              type="text"
              {...register("employment1.employer")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="employment1.supervisor"
              className="block text-sm font-medium text-gray-700"
            >
              Supervisor
            </label>
            <input
              id="employment1.supervisor"
              type="text"
              {...register("employment1.supervisor")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="employment1.startDate"
              className="block text-sm font-medium text-gray-700"
            >
              Dates: From
            </label>
            <input
              id="employment1.startDate"
              type="date"
              {...register("employment1.startDate")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="employment1.endDate"
              className="block text-sm font-medium text-gray-700"
            >
              To
            </label>
            <input
              id="employment1.endDate"
              type="date"
              {...register("employment1.endDate")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="employment1.address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            id="employment1.address"
            type="text"
            {...register("employment1.address")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label
              htmlFor="employment1.city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              id="employment1.city"
              type="text"
              {...register("employment1.city")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="employment1.state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              id="employment1.state"
              type="text"
              maxLength={2}
              {...register("employment1.state")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="employment1.zip"
              className="block text-sm font-medium text-gray-700"
            >
              Zip
            </label>
            <input
              id="employment1.zip"
              type="text"
              {...register("employment1.zip")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="employment1.phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              id="employment1.phone"
              type="tel"
              {...register("employment1.phone")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              {...register("employment1.fmcsr")}
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
              {...register("employment1.cfrPart40")}
              className="h-4 w-4"
            />
            <span>
              Were you subject to 49 CFR part 40 controlled substance and
              alcohol testing during this period?
            </span>
          </label>
        </div>

        <div className="mt-4">
          <label
            htmlFor="employment1.reasonsForLeaving"
            className="block text-sm font-medium text-gray-700"
          >
            Reasons for leaving
          </label>
          <textarea
            id="employment1.reasonsForLeaving"
            rows={3}
            {...register("employment1.reasonsForLeaving")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
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
