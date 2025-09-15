import { PDFDocument } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";

async function generatePDF(input, output) {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(input));

    // Get form fields
    const fieldNames = pdfDoc.getForm().getFields();
    console.log("All fields:");
    fieldNames.forEach((field) => {
      console.log(`- ${field.getName()}: ${field.constructor.name}`);
    });

    // Filter for text input fields
    const textFields = fieldNames.filter(
      (field) => field.constructor.name === "PDFTextField"
    );
    console.log(
      "\nText input fields:",
      textFields.map((field) => field.getName())
    );

    const form = pdfDoc.getForm();
    //make all fields like the middle_name field white broder color, 0 border width
    const textField = form.getTextField("middle_name");
    textField.setText("John");

    // Make border transparent
    textField.enableReadOnly();

    // Flatten the form to remove textboxes and leave just the text
    form.flatten();

    const pdfBytes = await pdfDoc.save();

    await writeFile(output, pdfBytes);
    console.log("PDF saved successfully");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Run the function
generatePDF(
  "./public/pdf.net_DRIVER-APPLICATION-Test-1 (1).pdf",
  "appFilled.pdf"
);
