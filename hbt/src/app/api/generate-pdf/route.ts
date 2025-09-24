import { PDFDocument } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

type FormData = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  dateOfBirth?: string;
  homeTelephone?: string;
  cellularTelephone?: string;
  socialSecurityNumber?: string;
};

async function generatePDF(input: string, output: string, formData: FormData) {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(input));

    // Get form field names for debugging
    const fieldNames: string[] = pdfDoc
      .getForm()
      .getFields()
      .map((f) => f.getName());
    console.log("Available PDF form fields:", fieldNames);

    const form = pdfDoc.getForm();

    // Map form data to PDF fields
    if (formData.firstName) {
      try {
        form.getTextField("first_name").setText(formData.firstName);
      } catch (e) {
        console.log("Field 'first_name' not found");
      }
    }
    if (formData.lastName) {
      try {
        form.getTextField("last_name").setText(formData.lastName);
      } catch (e) {
        console.log("Field 'last_name' not found");
      }
    }
    if (formData.middleName) {
      try {
        form.getTextField("middle_name").setText(formData.middleName);
      } catch (e) {
        console.log("Field 'middle_name' not found");
      }
    }
    if (formData.address) {
      try {
        form.getTextField("applicant_address").setText(formData.address);
      } catch (e) {
        console.log("Field 'address' not found");
      }
    }
    if (formData.city) {
      try {
        form.getTextField("applicant_city").setText(formData.city);
      } catch (e) {
        console.log("Field 'city' not found");
      }
    }
    if (formData.state) {
      try {
        form.getTextField("applicant_state").setText(formData.state);
      } catch (e) {
        console.log("Field 'state' not found");
      }
    }
    if (formData.zip) {
      try {
        form.getTextField("applicant_zip").setText(formData.zip);
      } catch (e) {
        console.log("Field 'zip' not found");
      }
    }
    if (formData.dateOfBirth) {
      try {
        form.getTextField("DOB").setText(formData.dateOfBirth);
      } catch (e) {
        console.log("Field 'date_of_birth' not found");
      }
    }
    if (formData.homeTelephone) {
      try {
        form
          .getTextField("applicant_telephone")
          .setText(formData.homeTelephone);
      } catch (e) {
        console.log("Field 'home_telephone' not found");
      }
    }
    if (formData.cellularTelephone) {
      try {
        form
          .getTextField("applicant_cellular")
          .setText(formData.cellularTelephone);
      } catch (e) {
        console.log("Field 'cellular_telephone' not found");
      }
    }
    if (formData.socialSecurityNumber) {
      try {
        form
          .getTextField("applicant_ssn")
          .setText(formData.socialSecurityNumber);
      } catch (e) {
        console.log("Field 'social_security_number' not found");
      }
    }

    // Flatten the form (make it no longer editable)
    form.flatten();

    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);

    console.log("PDF generated successfully with form data");
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Generate PDF with form data
    await generatePDF(
      "./public/application_revised.pdf",
      "appFilled.pdf",
      body
    );

    return NextResponse.json({ message: "PDF generated successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
