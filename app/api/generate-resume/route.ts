import puppeteer from "puppeteer";
import { NextResponse, NextRequest } from "next/server";
import { ResumeSchema } from "@/constants/schema";

export async function POST(req: NextRequest) {
  let browser;
  let body = await req.json();
  console.log(body);
  // let data = await ResumeSchema.safeParseAsync(body);
  // if (data.success) {
  try {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(60000);

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dhanush TP - Resume</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div class="bg-white text-gray-800 p-8 max-w-4xl mx-auto">
              <header className="text-center mb-4">
        <h1 className="text-3xl font-bold uppercase mb-1">{profile?.name}</h1>
        <h2 className="text-xl uppercase mb-2">{profile?.role}</h2>
        <hr className="border-t border-gray-300 my-2" />
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={tel:${body.profile.phone}}
            className="text-blue-600 hover:underline"
          >
            ${body.profile.phone}
          </a>
          <a
            href={mailto:${body.profile.email}}
            className="text-blue-600 hover:underline"
          >
            ${body.profile.email}
          </a>
          <a
            href={${body.profile?.website}}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Website
          </a>
          <a
            href={${body.profile?.linkedin}}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={${body.profile.github}}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </header>

        </div>
      </body>
      </html>
    `;

    await page.setContent(htmlContent, {
      waitUntil: ["load", "domcontentloaded", "networkidle0"],
      timeout: 60000,
    });

    await page.waitForFunction(
      () => {
        return (
          document.querySelector(
            'script[src="https://cdn.tailwindcss.com"]'
          ) !== null
        );
      },
      { timeout: 60000 }
    );

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px",
      },
    });
    await browser.close();

    const response = new NextResponse(pdf);
    response.headers.set("Content-Type", "application/pdf");
    response.headers.set(
      "Content-Disposition",
      "attachment; filename=resume.pdf"
    );

    return response;
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
  // } else {
  //   return NextResponse.json({ error: data.error }, { status: 500 });
  // }
}
