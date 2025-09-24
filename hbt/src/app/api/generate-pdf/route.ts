import { PDFDocument } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

async function generatePDF(input: string, output: string) {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(input));

    //nom of form fields
    const fieldNames: string[] = pdfDoc
      .getForm()
      .getFields()
      .map((f) => f.getName());
    console.log(fieldNames);
    const form = pdfDoc.getForm();

    form.getTextField("last_name").setText("John Williams");
    const pdfBytes = await pdfDoc.save();

    await writeFile(output, pdfBytes);
  } catch (error) {
    console.error(error);
  }
}
generatePDF("./public/application_revised.pdf", "appFilled.pdf");
export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json({ message: "PDF generated successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
