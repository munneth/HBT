"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ApplicationPart1: React.FC = () => {
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
  const { register, getValues } = useForm<FormInputs>();

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
            {...register("date")}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
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
            {...register("firstName")}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
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
            {...register("lastName")}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
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
          {...register("address")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
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
            {...register("city")}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
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
            {...register("state")}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
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
            {...register("zip")}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
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
            {...register("dateOfBirth")}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
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
            {...register("homeTelephone")}
            placeholder="(555)-123-4567"
            maxLength={14}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
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
            {...register("socialSecurityNumber")}
            placeholder="123456789"
            maxLength={9}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
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
        type="button"
        onClick={() => {
          const allValues = getValues();
          const formDataHashMap = {
            allValues,
          };
          console.log("Form Data HashMap:", formDataHashMap);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default ApplicationPart1;
