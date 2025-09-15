"use client";

import React, { useState } from "react";

const ApplicationPart1: React.FC = () => {
  const [homePhone, setHomePhone] = useState("");
  const [cellularPhone, setCellularPhone] = useState("");

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, "");

    // Format as (XXX)-XXX-XXXX
    if (phoneNumber.length >= 6) {
      return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    } else if (phoneNumber.length >= 3) {
      return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length > 0) {
      return `(${phoneNumber}`;
    }
    return phoneNumber;
  };

  const handlePhoneChange = (
    value: string,
    setter: (value: string) => void
  ) => {
    const formatted = formatPhoneNumber(value);
    setter(formatted);
  };

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
            name="date"
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
            name="firstName"
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
            name="middleName"
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
            name="lastName"
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
          name="address"
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
            name="city"
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
            name="state"
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
            name="zip"
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
            name="dateOfBirth"
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
            name="homeTelephone"
            value={homePhone}
            onChange={(e) => handlePhoneChange(e.target.value, setHomePhone)}
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
            name="cellularTelephone"
            value={cellularPhone}
            onChange={(e) =>
              handlePhoneChange(e.target.value, setCellularPhone)
            }
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
            name="socialSecurityNumber"
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
                name={`prevAddress${index}Street`}
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
                  name={`prevAddress${index}City`}
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
                  name={`prevAddress${index}State`}
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
                  name={`prevAddress${index}Zip`}
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
                  name={`prevAddress${index}DatesFrom`}
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
                  name={`prevAddress${index}DatesTo`}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Use backside of sheet for additional addresses
      </p>
    </form>
  );
};

export default ApplicationPart1;
