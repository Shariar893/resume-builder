import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function POST() {
  let browser;
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
        <header class="text-center mb-8">
          <h1 class="text-4xl font-bold text-black">Dhanush TP</h1>
          <p class="text-xl text-gray-600">Engineering Undergraduate</p>
          <div class="mt-4 flex justify-center space-x-4">
            <a href="tel:+91-8220586721" class="text-blue-600 hover:underline">+91-8220586721</a>
            <a href="mailto:dhanushtheijas08@gmail.com" class="text-blue-600 hover:underline">dhanushtheijas08@gmail.com</a>
            <a href="https://dhanushtheijas.vercel.app/" class="text-blue-600 hover:underline">dhanushtheijas.vercel.app</a>
            <a href="https://www.linkedin.com/in/dhanush-theijas-tp/" class="text-blue-600 hover:underline">LinkedIn</a>
            <a href="https://github.com/dhanushtheijas08" class="text-blue-600 hover:underline">GitHub</a>
          </div>
        </header>

        <main class="grid grid-cols-3 gap-8">
          <div class="col-span-2">
            <section class="mb-8">
              <h2 class="text-2xl font-bold mb-4 text-black">Experience</h2>
              <div class="mb-4">
                <h3 class="text-xl font-bold">Frontend Intern</h3>
                <p class="text-lg">Roots Industry Ltd</p>
                <p class="italic">Jan 2023 - Feb 2023 | Coimbatore, Tamilnadu</p>
                <ul class="list-disc list-inside mt-2">
                  <li>Developed a web application for Smart Safety Application at Roots Industry Ltd, aimed at empowering employees to report unsafe conditions promptly.</li>
                  <li>Implemented the frontend using React and Tailwind for the admin dashboard, ensuring seamless user experiences, efficient issue management, and responsive design for optimal viewing across devices.</li>
                  <li>Designed and integrated features allowing employees to capture images of safety hazards, submit reports, and track issue resolution progress, enhancing workplace safety and efficiency.</li>
                  <li>Tech Stack: <strong>HTML, CSS, JS, Tailwind, React</strong>.</li>
                </ul>
              </div>
            </section>

            <section class="mb-8">
              <h2 class="text-2xl font-bold mb-4 text-black">Education</h2>
              <div class="mb-4">
                <h3 class="text-xl font-bold">B.E Computer Science</h3>
                <p>KPRIET | 2021 - 2025 | Coimbatore, Tamilnadu</p>
              </div>
              <div>
                <h3 class="text-xl font-bold">Higher Secondary - 80.8%</h3>
                <p>Sri Ramakrishna Vidyalaya | 2020 | Ulundurpet, Tamilnadu</p>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-4 text-black">Projects</h2>
              <div class="mb-4">
                <h3 class="text-xl font-bold">ElectroWorld</h3>
                <ul class="list-disc list-inside mt-2">
                  <li><strong>Unity 3D Engine | Vuforia | C#</strong></li>
                  <li>An AR based project with the aim to solve the learning issues faced by the students due to pandemic.</li>
                  <li>It uses the power of AR to visualize complex electrical machines with its working.</li>
                  <li>Used by students of my college for learning at home during the pandemic.</li>
                </ul>
              </div>
            </section>
          </div>

          <div>
            <section class="mb-8">
              <h2 class="text-2xl font-bold mb-4 text-black">Technical Skills</h2>
              <div class="mb-4">
                <h3 class="text-xl font-bold">Programming Languages</h3>
                <ul class="list-disc list-inside">
                  <li>C/C++</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div class="mb-4">
                <h3 class="text-xl font-bold">Frameworks & Libraries</h3>
                <ul class="list-disc list-inside">
                  <li>HTML, CSS</li>
                  <li>ReactJs, Nextjs, NodeJs, Express</li>
                  <li>Tailwind</li>
                </ul>
              </div>
              <div class="mb-4">
                <h3 class="text-xl font-bold">Version Control</h3>
                <ul class="list-disc list-inside">
                  <li>Git</li>
                  <li>Github</li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold">Databases / Other Tools</h3>
                <ul class="list-disc list-inside">
                  <li>Postman</li>
                  <li>MongoDB</li>
                  <li>Prisma</li>
                  <li>VSCode</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-4 text-black">Certifications</h2>
              <ul class="list-disc list-inside">
                <li>Flipkart Grid 4.0 <a href="#" class="text-blue-600 hover:underline">Flipkart</a></li>
                <li>Spark AR Labs India Challenge <a href="#" class="text-blue-600 hover:underline">IncubateIND</a></li>
                <li>Web Development Course <a href="#" class="text-blue-600 hover:underline">Coursera</a></li>
              </ul>
            </section>
          </div>
        </main>
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
}
