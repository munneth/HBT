import { PDFDocument } from "pdf-lib";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";

type PDFFieldInfo = {
  name: string;
  type: string;
  isReadOnly?: boolean;
};

export async function GET() {
  try {
    const pdfPath = "./public/application_revised.pdf";
    const pdfBytes = await readFile(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    
    const form = pdfDoc.getForm();
    const fields = form.getFields();
    
    const fieldInfo: PDFFieldInfo[] = [];
    
    fields.forEach((field) => {
      const fieldName = field.getName();
      const fieldType = field.constructor.name;
      
      // Skip fields that are already handled or are read-only
      let isReadOnly = false;
      try {
        if (fieldType === "PDFTextField") {
          const textField = form.getTextField(fieldName);
          isReadOnly = textField.isReadOnly();
        }
      } catch (e) {
        // Field might not be accessible, skip
      }
      
      fieldInfo.push({
        name: fieldName,
        type: fieldType,
        isReadOnly: isReadOnly,
      });
    });
    
    // Filter to only text fields (not checkboxes, radio buttons, etc.) that aren't read-only
    const textFields = fieldInfo.filter(
      (field) => field.type === "PDFTextField" && !field.isReadOnly
    );
    
    return NextResponse.json({
      allFields: fieldInfo,
      textFields: textFields.map((f) => f.name),
      totalFields: fields.length,
      textFieldCount: textFields.length,
    });
  } catch (error) {
    console.error("Error extracting PDF fields:", error);
    return NextResponse.json(
      { error: "Failed to extract PDF fields" },
      { status: 500 }
    );
  }
}

