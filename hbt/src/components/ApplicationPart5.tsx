"use client";

import React from "react";
import { useForm } from "react-hook-form";

export type ApplicationPart5Inputs = {
  signature: string;
  dateSigned: string;
};

interface ApplicationPart5Props {
  onFormSubmit?: (data: ApplicationPart5Inputs) => void;
  initialData?: ApplicationPart5Inputs;
}

const ApplicationPart5: React.FC<ApplicationPart5Props> = ({
  onFormSubmit,
  initialData,
}) => {
  const { register, handleSubmit } = useForm<ApplicationPart5Inputs>({
    defaultValues: initialData || { signature: "", dateSigned: "" },
  });

  return (
    <form className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Disclosure and Certification
      </h2>

      <div className="space-y-3 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-md p-4 leading-relaxed">
        <p>
          For driver applicants of commercial motor vehicles that require a
          Commercial Driver License (CDL) the applicant must disclose their
          controlled substance and alcohol status per the requirements of 49 CFR
          part 40.25(j).
        </p>
        <p>
          As a prospective driver employee, you have the right to review
          information provided by previous employers. You have the right to have
          errors in the information corrected by the previous employer(s) and
          for that previous employer(s) to re-send the corrected information to
          the prospective employer; the right to have a rebuttal statement
          attached to the alleged erroneous information, if the previous
          employer and the driver cannot agree on the accuracy of the
          information.
        </p>
        <p>
          Driver employees who have previous Department of Transportation
          regulated employment history in the preceding three years, and wish to
          review previous employer provided investigative information, must
          submit a written request to the prospective employer, which may be
          done at anytime, including when applying or as late as thirty (30)
          days after being employed or being notified of denial of employment.
          The prospective employer must provide this information to the
          applicant within five (5) business days of receiving the written
          request. If the prospective employer has not yet received the
          requested information from the previous employer(s), then the five (5)
          business day deadlines will begin when the prospective employer
          receives the requested safety performance history information. If the
          driver has not arranged to pick up or receive the requested records
          within thirty (30) days of the prospective employer making them
          available, the prospective motor carrier may consider the driver to
          have waived their request to review the records.
        </p>
        <p className="font-medium">Certification</p>
        <p>
          “I certify that this application was completed by me, and that all
          entries on it and information in it are true and complete to the best
          of my knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="signature"
            className="block text-sm font-medium text-gray-700"
          >
            Signature (type your full name)
          </label>
          <input
            id="signature"
            type="text"
            {...register("signature")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="dateSigned"
            className="block text-sm font-medium text-gray-700"
          >
            Date signed
          </label>
          <input
            id="dateSigned"
            type="date"
            {...register("dateSigned")}
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
        Submit
      </button>
    </form>
  );
};

export default ApplicationPart5;
