// import puppeteer from "puppeteer";
// import { NextResponse, NextRequest } from "next/server";
// import { ResumeSchema } from "@/constants/schema";

// export async function POST(req: NextRequest) {
//   let browser;
//   let body = await req.json();
//   console.log(body);
//   // let data = await ResumeSchema.safeParseAsync(body);
//   // if (data.success) {
//   try {
//     browser = await puppeteer.launch({
//       args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     });
//     const page = await browser.newPage();
//     await page.setDefaultNavigationTimeout(60000);

//     const htmlContent = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Resume</title>
//     <script src="https://cdn.tailwindcss.com"></script>
//     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
// </head>
// <body>
//     <div class="w-[210mm] h-[297mm] mx-auto p-8 bg-white text-black shadow-lg overflow-hidden text-[11px] leading-tight print:shadow-none">
//         <div class="flex flex-col h-full">
//             <!-- Header -->
//             <header class="text-center mb-4">
//                 <h1 class="text-3xl font-bold mb-1">John Doe</h1>
//                 <p>123 Main St, Anytown, USA</p>
//                 <div class="flex justify-center space-x-5 mt-1">
//                     <a href="tel:+1234567890" class="flex items-center">
//                         <i class="fas fa-phone mr-1 h-3 w-3"></i> +1234567890
//                     </a>
//                     <a href="mailto:john@example.com" class="flex items-center">
//                         <i class="fas fa-envelope mr-1 h-3 w-3"></i> john@example.com
//                     </a>
//                     <a href="https://linkedin.com/in/johndoe" class="flex items-center">
//                         <i class="fab fa-linkedin mr-1 h-3 w-3"></i> LinkedIn
//                     </a>
//                     <a href="https://github.com/johndoe" class="flex items-center">
//                         <i class="fab fa-github mr-1 h-3 w-3"></i> Github
//                     </a>
//                     <a href="https://johndoe.com" class="flex items-center">
//                         <i class="fas fa-globe mr-1 h-3 w-3"></i> Website
//                     </a>
//                 </div>
//             </header>

//             <!-- Education -->
//             <section class="mb-3">
//                 <h2 class="text-lg font-bold border-b border-gray-300 mb-1 uppercase">
//                     Education
//                 </h2>
//                 <div class="mb-1">
//                     <div class="flex justify-between">
//                         <h3 class="font-bold">University of Example</h3>
//                         <span>2018 - 2022</span>
//                     </div>
//                     <p>
//                         Bachelor of Science - Computer Science - CGPA: 3.8
//                     </p>
//                     <p>Relevant coursework: Data Structures, Algorithms, Web Development</p>
//                 </div>
//             </section>

//             <!-- Projects -->
//             <section class="mb-3">
//                 <h2 class="text-lg font-bold border-b border-gray-300 mb-1 uppercase">
//                     Projects
//                 </h2>
//                 <div class="mb-2">
//                     <div class="flex justify-between">
//                         <h3 class="font-bold">Project Name</h3>
//                     </div>
//                     <p class="italic">
//                         <a href="#"> Live Link </a>
//                         <a href="#">| Github Link </a>
//                     </p>
//                     <ul class="list-disc pl-5">
//                         <li>Developed a responsive web application using React and Node.js</li>
//                         <li>Implemented user authentication and authorization</li>
//                         <li>Integrated with third-party APIs for data retrieval</li>
//                     </ul>
//                 </div>
//             </section>

//             <!-- Experiences -->
//             <section class="mb-3">
//                 <h2 class="text-lg font-bold border-b border-gray-300 mb-1 uppercase">
//                     Experience
//                 </h2>
//                 <div class="mb-2">
//                     <div class="flex justify-between">
//                         <h3 class="font-bold">Tech Company Inc.</h3>
//                         <span>Jun 2022 - Present</span>
//                     </div>
//                     <p>Software Developer</p>
//                     <ul class="list-disc pl-5">
//                         <li>Developed and maintained web applications using React and Node.js</li>
//                         <li>Collaborated with cross-functional teams to deliver high-quality software</li>
//                         <li>Participated in code reviews and implemented best practices</li>
//                     </ul>
//                 </div>
//             </section>

//             <!-- Skills -->
//             <section class="mb-3">
//                 <h2 class="text-lg font-bold border-b border-gray-300 mb-1 uppercase">
//                     Skills
//                 </h2>
//                 <div class="">
//                     <p>
//                         <span class="font-semibold">Programming Languages: </span>
//                         JavaScript, Python, Java
//                     </p>
//                     <p>
//                         <span class="font-semibold">Web Technologies: </span>
//                         HTML, CSS, React, Node.js, Express
//                     </p>
//                     <p>
//                         <span class="font-semibold">Tools & Platforms: </span>
//                         Git, GitHub, AWS, Docker
//                     </p>
//                 </div>
//             </section>

//             <!-- Certifications -->
//             <section class="mb-3">
//                 <h2 class="text-lg font-bold border-b border-gray-300 mb-1 uppercase">
//                     Certifications
//                 </h2>
//                 <ul class="mb-2 list-disc pl-3">
//                     <li class="">
//                         <a class="font-semibold" href="#">
//                             AWS Certified Developer - Associate
//                         </a>
//                         by
//                         <span class="capitalize"> Amazon Web Services </span>
//                     </li>
//                     <li class="">
//                         <a class="font-semibold" href="#">
//                             React Developer Certification
//                         </a>
//                         by
//                         <span class="capitalize"> Meta </span>
//                     </li>
//                 </ul>
//             </section>
//         </div>
//     </div>
// </body>
// </html>`;

//     await page.setContent(htmlContent, {
//       waitUntil: ["load", "domcontentloaded", "networkidle0"],
//       timeout: 60000,
//     });

//     await page.waitForFunction(
//       () => {
//         return (
//           document.querySelector(
//             'script[src="https://cdn.tailwindcss.com"]'
//           ) !== null
//         );
//       },
//       { timeout: 60000 }
//     );

//     const pdf = await page.pdf({
//       format: "A4",
//       printBackground: true,
//       margin: {
//         top: "20px",
//         right: "20px",
//         bottom: "20px",
//         left: "20px",
//       },
//     });
//     await browser.close();

//     const response = new NextResponse(pdf);
//     response.headers.set("Content-Type", "application/pdf");
//     response.headers.set(
//       "Content-Disposition",
//       "attachment; filename=resume.pdf"
//     );

//     return response;
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     return NextResponse.json(
//       { error: "Failed to generate PDF" },
//       { status: 500 }
//     );
//   }
//   // } else {
//   //   return NextResponse.json({ error: data.error }, { status: 500 });
//   // }
// }

// // import puppeteer from "puppeteer";
// // import { NextResponse, NextRequest } from "next/server";
// // import { ResumeSchema } from "@/constants/schema";
// // import { renderToString } from "@/components/resume-template/resume-template-3";
// // import { Resume } from "@/constants/types";

// // export async function POST(req: NextRequest) {
// //   let browser;
// //   let body = await req.json();
// //   // console.log(body);

// //   // let parseResult = await ResumeSchema.safeParseAsync(body);
// //   // console.log(parseResult.error);
// //   let parseResult = body;

// //   if (parseResult) {
// //     try {
// //       // Convert the parsed data to the Resume type
// //       const resumeData: Resume = {
// //         profile: parseResult.profile,
// //         experiences: parseResult.experience,
// //         educations: parseResult.education,
// //         skills: parseResult.skills,
// //         projects: parseResult.projects,
// //         languages: parseResult.languages,
// //         certifications: parseResult.certifications,
// //         resumeId: parseResult.profile.resumeIdentifier,
// //         // profile: parseResult.data.profile,
// //         // experiences: parseResult.data.experience,
// //         // educations: parseResult.data.education,
// //         // skills: parseResult.data.skills,
// //         // projects: parseResult.data.projects,
// //         // languages: parseResult.data.languages,
// //         // certifications: parseResult.data.certifications,
// //         // resumeId: parseResult.data.profile.resumeIdentifier,
// //       };

// //       browser = await puppeteer.launch({
// //         args: ["--no-sandbox", "--disable-setuid-sandbox"],
// //       });
// //       const page = await browser.newPage();

// //       // const resumeHtml = await renderToString(resumeData);
// //       const htmlContent = `
// //         <!DOCTYPE html>
// //         <html lang="en">
// //         <head>
// //           <meta charset="UTF-8">
// //           <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //           <title>Resume</title>
// //           <script src="https://cdn.tailwindcss.com"></script>
// //         </head>
// //         <body>
// //           <div className="w-[210mm] h-[297mm] mx-auto p-8 bg-white text-black shadow-lg overflow-hidden text-[11px] leading-tight print:shadow-none">
// //             <div className="flex flex-col h-full">
// //                <header className="text-center mb-4">
// //                 <h1 className="text-3xl font-bold mb-1">{profile?.name}</h1>
// //                 <p>{profile?.address}</p>
// //                 <div className="flex justify-center space-x-5 mt-1">
// //                   ${
// //                     resumeData.profile?.phone &&
// //                     `<a href={tel:${resumeData.profile?.phone}} className="flex items-center">
// //                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" className="mr-1 h-3 w-3" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
// //                       ${resumeData.profile?.phone}
// //                     </a>`
// //                   }
// //                   ${
// //                     resumeData.profile?.email &&
// //                     `<a
// //                       href={mailto:${resumeData.profile?.email}}
// //                       className="flex items-center"
// //                     >
// //                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" className="mr-1 h-3 w-3" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> ${resumeData.profile?.email}
// //                     </a>`
// //                   }
// //                   ${
// //                     resumeData.profile?.linkedin &&
// //                     `<a href=${resumeData.profile?.linkedin} className="flex items-center">
// //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" className="mr-1 h-3 w-3" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> LinkedIn
// //                     </a>`
// //                   }
// //                   ${
// //                     resumeData.profile?.github &&
// //                     `<a href={resumeData.profile?.github} className="flex items-center">
// //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" className="mr-1 h-3 w-3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Github
// //                     </a>`
// //                   }
// //                   ${
// //                     resumeData.profile?.website &&
// //                     `<a href={resumeData.profile?.website} className="flex items-center">
// //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20" className="mr-1 h-3 w-3"/></svg> Website
// //                     </a>`
// //                   }
// //                 </div>
// //               </header>
// //             </div>
// //           </div>
// //         </body>
// //         </html>
// //       `;

// //       await page.setContent(htmlContent, {
// //         waitUntil: ["load", "domcontentloaded", "networkidle0"],
// //         timeout: 60000,
// //       });

// //       // Wait for Tailwind to load
// //       await page.waitForFunction(
// //         () =>
// //           document.querySelector(
// //             'script[src="https://cdn.tailwindcss.com"]'
// //           ) !== null,
// //         { timeout: 60000 }
// //       );

// //       const pdf = await page.pdf({
// //         format: "A4",
// //         printBackground: true,
// //         margin: { top: "20px", right: "20px", bottom: "20px", left: "20px" },
// //       });

// //       await browser.close();

// //       const response = new NextResponse(pdf);
// //       response.headers.set("Content-Type", "application/pdf");
// //       response.headers.set(
// //         "Content-Disposition",
// //         "attachment; filename=resume.pdf"
// //       );

// //       return response;
// //     } catch (error) {
// //       console.error("Error generating PDF:", error);
// //       return NextResponse.json(
// //         { error: "Failed to generate PDF" },
// //         { status: 500 }
// //       );
// //     }
// //   } else {
// //     return NextResponse.json({ error: parseResult.error }, { status: 400 });
// //   }
// // }

// import puppeteer from "puppeteer";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   let browser;
//   const body = await req.json();
//   console.log(body);

//   try {
//     browser = await puppeteer.launch({
//       args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     });
//     const page = await browser.newPage();

//     await page.setDefaultNavigationTimeout(60000);

//     const htmlContent = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Dhanush TP - Resume</title>
//           <script src="https://cdn.tailwindcss.com"></script>
//         </head>
//         <body>
//           <div class="bg-white text-gray-800 p-8 max-w-4xl mx-auto">
//             <header class="text-center mb-8">
//               <h1 class="text-4xl font-bold text-black">Dhanush TP</h1>
//               <p class="text-xl text-gray-600">Engineering Undergraduate</p>
//               <div class="mt-4 flex justify-center space-x-4">
//                 <a href="tel:+91-8220586721" class="text-blue-600 hover:underline">+91-8220586721</a>
//                 <a href="mailto:dhanushtheijas08@gmail.com" class="text-blue-600 hover:underline">dhanushtheijas08@gmail.com</a>
//                 <a href="https://dhanushtheijas.vercel.app/" class="text-blue-600 hover:underline">dhanushtheijas.vercel.app</a>
//                 <a href="https://www.linkedin.com/in/dhanush-theijas-tp/" class="text-blue-600 hover:underline">LinkedIn</a>
//                 <a href="https://github.com/dhanushtheijas08" class="text-blue-600 hover:underline">GitHub</a>
//               </div>
//             </header>
//             <main class="grid grid-cols-3 gap-8">
//               <div class="col-span-2">
//                 <section class="mb-8">
//                   <h2 class="text-2xl font-bold mb-4 text-black">Experience</h2>
//                   <div class="mb-4">
//                     <h3 class="text-xl font-bold">Frontend Intern</h3>
//                     <p class="text-lg">Roots Industry Ltd</p>
//                     <p class="italic">Jan 2023 - Feb 2023 | Coimbatore, Tamilnadu</p>
//                     <ul class="list-disc list-inside mt-2">
//                       <li>Developed a web application for Smart Safety Application at Roots Industry Ltd, aimed at empowering employees to report unsafe conditions promptly.</li>
//                       <li>Implemented the frontend using React and Tailwind for the admin dashboard, ensuring seamless user experiences, efficient issue management, and responsive design for optimal viewing across devices.</li>
//                       <li>Designed and integrated features allowing employees to capture images of safety hazards, submit reports, and track issue resolution progress, enhancing workplace safety and efficiency.</li>
//                       <li>Tech Stack: <strong>HTML, CSS, JS, Tailwind, React</strong>.</li>
//                     </ul>
//                   </div>
//                 </section>
//                 <section class="mb-8">
//                   <h2 class="text-2xl font-bold mb-4 text-black">Education</h2>
//                   <div class="mb-4">
//                     <h3 class="text-xl font-bold">B.E Computer Science</h3>
//                     <p>KPRIET | 2021 - 2025 | Coimbatore, Tamilnadu</p>
//                   </div>
//                   <div>
//                     <h3 class="text-xl font-bold">Higher Secondary - 80.8%</h3>
//                     <p>Sri Ramakrishna Vidyalaya | 2020 | Ulundurpet, Tamilnadu</p>
//                   </div>
//                 </section>
//                 <section>
//                   <h2 class="text-2xl font-bold mb-4 text-black">Projects</h2>
//                   <div class="mb-4">
//                     <h3 class="text-xl font-bold">ElectroWorld</h3>
//                     <ul class="list-disc list-inside mt-2">
//                       <li><strong>Unity 3D Engine | Vuforia | C#</strong></li>
//                       <li>An AR based project with the aim to solve the learning issues faced by the students due to pandemic.</li>
//                       <li>It uses the power of AR to visualize complex electrical machines with its working.</li>
//                       <li>Used by students of my college for learning at home during the pandemic.</li>
//                     </ul>
//                   </div>
//                 </section>
//               </div>
//               <div>
//                 <section class="mb-8">
//                   <h2 class="text-2xl font-bold mb-4 text-black">Technical Skills</h2>
//                   <div class="mb-4">
//                     <h3 class="text-xl font-bold">Programming Languages</h3>
//                     <ul class="list-disc list-inside">
//                       <li>C/C++</li>
//                       <li>Python</li>
//                       <li>JavaScript</li>
//                     </ul>
//                   </div>
//                   <div class="mb-4">
//                     <h3 class="text-xl font-bold">Frameworks & Libraries</h3>
//                     <ul class="list-disc list-inside">
//                       <li>HTML, CSS</li>
//                       <li>ReactJs, Nextjs, NodeJs, Express</li>
//                       <li>Tailwind</li>
//                     </ul>
//                   </div>
//                   <div class="mb-4">
//                     <h3 class="text-xl font-bold">Version Control</h3>
//                     <ul class="list-disc list-inside">
//                       <li>Git</li>
//                       <li>Github</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h3 class="text-xl font-bold">Databases / Other Tools</h3>
//                     <ul class="list-disc list-inside">
//                       <li>Postman</li>
//                       <li>MongoDB</li>
//                       <li>Prisma</li>
//                       <li>VSCode</li>
//                     </ul>
//                   </div>
//                 </section>
//                 <section>
//                   <h2 class="text-2xl font-bold mb-4 text-black">Certifications</h2>
//                   <ul class="list-disc list-inside">
//                     <li>Flipkart Grid 4.0 <a href="#" class="text-blue-600 hover:underline">Flipkart</a></li>
//                     <li>Spark AR Labs India Challenge <a href="#" class="text-blue-600 hover:underline">IncubateIND</a></li>
//                     <li>Web Development Course <a href="#" class="text-blue-600 hover:underline">Coursera</a></li>
//                   </ul>
//                 </section>
//               </div>
//             </main>
//           </div>
//         </body>
//         </html>
//       `;

//     await page.setContent(htmlContent, {
//       waitUntil: ["load", "domcontentloaded", "networkidle0"],
//       timeout: 60000,
//     });

//     await page.waitForFunction(
//       () => {
//         return (
//           document.querySelector(
//             'script[src="https://cdn.tailwindcss.com"]'
//           ) !== null
//         );
//       },
//       { timeout: 60000 }
//     );

//     const pdf = await page.pdf({
//       format: "A4",
//       printBackground: true,
//       margin: {
//         top: "20px",
//         right: "20px",
//         bottom: "20px",
//         left: "20px",
//       },
//     });
//     await browser.close();

//     const response = new NextResponse(pdf);
//     response.headers.set("Content-Type", "application/pdf");
//     response.headers.set(
//       "Content-Disposition",
//       "attachment; filename=resume.pdf"
//     );

//     return response;
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     return NextResponse.json(
//       { error: "Failed to generate PDF" },
//       { status: 500 }
//     );
//   }
// }

import puppeteer from "puppeteer";
import { NextRequest, NextResponse } from "next/server";
import { extractParagraphs } from "@/lib/utils";

import { extractTextFromHtml } from "@/lib/text-extracter";

const svgIcons = {
  phone: ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="mr-1 h-3 w-3"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>`,

  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-3 w-3"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,

  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-3 w-3"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,

  github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-3 w-3"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,

  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-3 w-3"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
};

export async function POST(req: NextRequest) {
  let browser;
  const body = await req.json();

  try {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.setDefaultNavigationTimeout(60000);

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${body.profile.name} - Resume</title>
  <style>
    .list-disk {
      list-style: disc;
    }
    .pl-5 {
      padding-left: 1.25rem;
    }
  </style>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="w-[210mm] h-[297mm] mx-auto p-8 bg-white text-black shadow-lg overflow-hidden text-base leading-tight print:shadow-none">
    <div class="flex flex-col h-full">
      <!-- Header -->
      <header class="text-center mb-3.5">
        <h1 class="text-3xl font-bold mb-2">${body.profile.name}</h1>
        <p class="text-lg">${body.profile.address}</p>
        <div class="flex justify-center space-x-6 mt-2">
          ${
            body.profile.phone
              ? `<a href="tel:${body.profile.phone}" class="flex items-center text-blue-600 hover:underline"> ${svgIcons.phone} ${body.profile.phone}</a>`
              : ""
          }
          ${
            body.profile.email
              ? `<a href="mailto:${body.profile.email}" class="flex items-center text-blue-600 hover:underline"> ${svgIcons.mail} ${body.profile.email}</a>`
              : ""
          }
          ${
            body.profile.linkedin
              ? `<a href="${body.profile.linkedin}" class="flex items-center text-blue-600 hover:underline"> ${svgIcons.linkedin} LinkedIn</a>`
              : ""
          }
          ${
            body.profile.github
              ? `<a href="${body.profile.github}" class="flex items-center text-blue-600 hover:underline"> ${svgIcons.github} Github</a>`
              : ""
          }
          ${
            body.profile.website
              ? `<a href="${body.profile.website}" class="flex items-center text-blue-600 hover:underline"> ${svgIcons.globe} Website</a>`
              : ""
          }
        </div>
      </header>

      <!-- Education -->
      ${
        body.educations.length > 0
          ? `<section class="mb-3"><h2 class="text-xl font-bold border-b border-gray-300 mb-2 uppercase">Education</h2>${body.educations
              .map(
                (edu: any, index: number) =>
                  `<div key=${index} class="mb-3"><div class="flex justify-between"><h3 class="font-semibold text-lg">${edu.institutionName}</h3><span class="text-sm">${edu.startDate} - ${edu.endDate}</span></div><p class="text-sm">${edu.degree} - ${edu.fieldOfStudy} - CGPA: ${edu.score}</p><ul class="list-disc pl-5 text-sm">${edu.description}</ul></div>`
              )
              .join("")}</section>`
          : ""
      }

      <!-- Projects -->
      ${
        body.projects.length > 0
          ? `<section class="mb-3"><h2 class="text-xl font-bold border-b border-gray-300 mb-2 uppercase">Projects</h2>${body.projects
              .map(
                (project: any) =>
                  `<div key=${
                    project.projectId
                  } class="mb-3"><div class="flex justify-between"><h3 class="font-semibold text-lg">${
                    project.projectName
                  }</h3></div><p class="italic text-sm">${
                    project.deploymentLink
                      ? `<a href=${project.deploymentLink} class="text-blue-600 hover:underline">Live Link</a>`
                      : ""
                  } ${
                    project.repoLink
                      ? `<a href=${project.repoLink} class="text-blue-600 hover:underline">| Github Link</a>`
                      : ""
                  }</p><div class="pl-5 text-sm"><ul class="list-disc">${extractParagraphs(
                    project.projectDescription
                  )
                    .map(
                      (para: any, index: number) =>
                        `<li key=${index}>${para}</li>`
                    )
                    .join("")}</ul></div></div>`
              )
              .join("")}</section>`
          : ""
      }

      <!-- Experiences -->
      ${
        body.experiences.length > 0
          ? `<section class="mb-3"><h2 class="text-xl font-bold border-b border-gray-300 mb-2 uppercase">Experience</h2>${body.experiences
              .map(
                (experience: any) =>
                  `<div key=${
                    experience.expId
                  } class="mb-2"><div class="flex justify-between"><h3 class="font-semibold text-lg">${
                    experience.company
                  }</h3><span class="text-sm">${experience.startDate} - ${
                    experience.endDate
                  }</span></div>${
                    experience.role
                      ? `<p class="text-sm">${experience.role}</p>`
                      : ""
                  }<ul class="list-disc pl-5 text-sm">${extractParagraphs(
                    experience.description
                  )
                    .map(
                      (para: any, index: number) =>
                        `<li key=${index}>${para}</li>`
                    )
                    .join("")}</ul></div>`
              )
              .join("")}</section>`
          : ""
      }

      <!-- Skills -->
      ${
        body.skills.length > 0
          ? `<section class="mb-3"><h2 class="text-xl font-bold border-b border-gray-300 mb-2 uppercase">Skills</h2>${body.skills
              .map(
                (skill: any) =>
                  `<div key=${skill.skillId} class="text-sm"><span class="font-semibold">${skill.skillCategories} :</span> ${skill.skillList}</div>`
              )
              .join("")}</section>`
          : ""
      }

      <!-- Certifications -->
      ${
        body.certifications.length > 0
          ? `<section class="mb-3"><h2 class="text-xl font-bold border-b border-gray-300 mb-2 uppercase">Certifications</h2><ul class="mb-2 list-disc pl-3 text-sm">${body.certifications
              .map(
                (certification: any, index: number) =>
                  `<li key=${index}><a class="font-semibold text-blue-600 hover:underline" href=${certification.certificationProof}>${certification.certificationName}</a> by <span class="capitalize">${certification.certificationAuthority}</span></li>`
              )
              .join("")}</ul></section>`
          : ""
      }
    </div>
  </div>
</body>
</html>
`;

    // const htmlContent = `
    //   <!DOCTYPE html>
    //   <html lang="en">
    //   <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>${body.profile.name} - Resume</title>
    //     <style>
    //      .list-disk {
    //     list-style: disc;
    //   }
    //       .pl-5 {
    //       	padding-left: 1.25rem;
    //       }
    //     </style>
    //     <script src="https://cdn.tailwindcss.com"></script>
    //   </head>
    //   <body>
    //     <div class="w-[210mm] h-[297mm] mx-auto p-8 bg-white text-black shadow-lg overflow-hidden text-[11px] leading-tight print:shadow-none">
    //       <div class="flex flex-col h-full">
    //         <!-- Header -->
    //         <header class="text-center mb-4">
    //           <h1 class="text-3xl font-bold mb-1">${body.profile.name}</h1>
    //           <p>${body.profile.address}</p>
    //           <div class="flex justify-center space-x-5 mt-1">
    //             ${
    //               body.profile.phone
    //                 ? `<a href="tel:${body.profile.phone}" class="flex items-center"> ${svgIcons.phone} ${body.profile.phone}</a>`
    //                 : ""
    //             }
    //             ${
    //               body.profile.email
    //                 ? `<a href="mailto:${body.profile.email}" class="flex items-center"> ${svgIcons.mail} ${body.profile.email}</a>`
    //                 : ""
    //             }
    //             ${
    //               body.profile.linkedin
    //                 ? `<a href="${body.profile.linkedin}" class="flex items-center"> ${svgIcons.linkedin} LinkedIn</a>`
    //                 : ""
    //             }
    //             ${
    //               body.profile.github
    //                 ? `<a href="${body.profile.github}" class="flex items-center"><${svgIcons.github} Github</a>`
    //                 : ""
    //             }
    //             ${
    //               body.profile.website
    //                 ? `<a href="${body.profile.website}" class="flex items-center"> ${svgIcons.globe} Website</a>`
    //                 : ""
    //             }
    //           </div>
    //         </header>

    //         <!-- Education -->
    //         ${
    //           body.educations.length > 0
    //             ? `<section class="mb-3"><h2 class="text-lg font-bold border-b border-gray-300 mb-1 uppercase">Education</h2>${body.educations
    //                 .map(
    //                   (edu: any, index: number) =>
    //                     `<div key=${index} class="mb-1"><div class="flex justify-between"><h3 class="font-bold">${edu.institutionName}</h3><span>${edu.startDate} - ${edu.endDate}</span></div><p>${edu.degree} - ${edu.fieldOfStudy} - CGPA: ${edu.score}</p> <ul className="list-disc pl-5">
    //                   ${edu.description}
    //                      </ul>  </div>`
    //                 )
    //                 .join("")}</section>`
    //             : ""
    //         }

    //         <!-- Projects -->
    //         ${
    //           body.projects.length > 0
    //             ? `<section class="mb-3"><h2 class="text-lg font-bold border-b border-gray-300 mb-1 uppercase">Projects</h2>${body.projects
    //                 .map(
    //                   (project: any) =>
    //                     `<div key=${
    //                       project.projectId
    //                     } class="mb-2"><div class="flex justify-between"><h3 class="font-bold">${
    //                       project.projectName
    //                     }</h3></div><p class="italic">${
    //                       project.deploymentLink
    //                         ? `<a href=${project.deploymentLink}> Live Link </a>`
    //                         : ""
    //                     }${
    //                       project.repoLink
    //                         ? `<a href=${project.repoLink}>| Github Link </a>`
    //                         : ""
    //                     }</p> <div class="pl-5">
    //                         <ul class="list-disc">${extractParagraphs(
    //                           project.projectDescription
    //                         )
    //                           .map(
    //                             (para: any, index: number) =>
    //                               `<li key=${index}> <span> ${para} </span></li>`
    //                           )
    //                           .join("")}</ul>
    //                      </div> </div>`
    //                 )
    //                 .join("")}</section>`
    //             : ""
    //         }

    //         <!-- Experiences -->
    //         ${
    //           body.experiences.length > 0
    //             ? `<section class="mb-3"><h2 class="text-lg font-bold border-b border-gray-300 mb-1 uppercase">Experience</h2>${body.experiences
    //                 .map(
    //                   (experience: any) =>
    //                     `<div key=${
    //                       experience.expId
    //                     } class="mb-2"><div class="flex justify-between"><h3 class="font-bold">${
    //                       experience.company
    //                     }</h3><span>${experience.startDate} - ${
    //                       experience.endDate
    //                     }</span></div>${
    //                       experience.role ? `<p>${experience.role}</p>` : ""
    //                     }                         <ul class="list-disc pl-5">${extractParagraphs(
    //                       experience.description
    //                     )
    //                       .map(
    //                         (para: any, index: number) =>
    //                           `<li key=${index}> <span> ${para} </span></li>`
    //                       )
    //                       .join("")}</ul> </div>`
    //                 )
    //                 .join("")}</section>`
    //             : ""
    //         }

    //         <!-- Skills -->
    //         ${
    //           body.skills.length > 0
    //             ? `<section class="mb-3"><h2 class="text-lg font-bold border-b border-gray-300 mb-1 uppercase">Skills</h2>${body.skills
    //                 .map(
    //                   (skill: any) =>
    //                     `<div key=${skill.skillId}><span class="font-semibold">${skill.skillCategories} : </span>${skill.skillList}</div>`
    //                 )
    //                 .join("")}</section>`
    //             : ""
    //         }

    //         <!-- Certifications -->
    //         ${
    //           body.certifications.length > 0
    //             ? `<section class="mb-3"><h2 class="text-lg font-bold border-b border-gray-300 mb-1 uppercase">Certifications</h2><ul class="mb-2 list-disc pl-3">${body.certifications
    //                 .map(
    //                   (certification: any, index: number) =>
    //                     `<li key=${index}><a class="font-semibold" href=${certification.certificationProof}>${certification.certificationName}</a> by<span class="capitalize"> ${certification.certificationAuthority} </span></li>`
    //                 )
    //                 .join("")}</ul></section>`
    //             : ""
    //         }
    //       </div>
    //     </div>
    //   </body>
    //   </html>
    // `;

    //     const htmlContent = `<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //   <title>${body.profile.name} - Resume</title>
    //   <style>
    //     /* General styles */
    // body {
    //   font-family: Arial, sans-serif;
    //   margin: 0;
    //   padding: 0;
    //   background-color: #f8f8f8;
    // }

    // .resume-container {
    //   width: 210mm;
    //   height: 297mm;
    //   margin: 0 auto;
    //   padding: 8mm;
    //   background-color: white;
    //   color: black;
    //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    //   overflow: hidden;
    //   font-size: 11px;
    //   line-height: 1.4;
    // }

    // .resume-content {
    //   display: flex;
    //   flex-direction: column;
    //   height: 100%;
    // }

    // /* Header */
    // .resume-header {
    //   text-align: center;
    //   margin-bottom: 16px;
    // }

    // .resume-title {
    //   font-size: 24px;
    //   font-weight: bold;
    //   margin-bottom: 4px;
    // }

    // .resume-address {
    //   margin-bottom: 8px;
    // }

    // .resume-contact {
    //   display: flex;
    //   justify-content: center;
    //   gap: 16px;
    //   margin-top: 4px;
    // }

    // .resume-contact-item {
    //   display: flex;
    //   align-items: center;
    // }

    // .icon {
    //   margin-right: 4px;
    //   width: 12px;
    //   height: 12px;
    // }

    // /* Section */
    // .resume-section {
    //   margin-bottom: 12px;
    // }

    // .resume-section-title {
    //   font-size: 16px;
    //   font-weight: bold;
    //   border-bottom: 1px solid #e0e0e0;
    //   margin-bottom: 4px;
    //   text-transform: uppercase;
    // }

    // .resume-item {
    //   margin-bottom: 8px;
    // }

    // .resume-item-header {
    //   display: flex;
    //   justify-content: space-between;
    // }

    // .resume-item-title {
    //   font-weight: bold;
    // }

    // .resume-item-date {
    //   font-size: 11px;
    //   color: #777;
    // }

    // .resume-item-list {
    //   list-style-type: disc;
    //   padding-left: 20px;
    // }

    // .resume-item-description {
    //   padding-left: 20px;
    //   color: #38a169; /* Green text */
    // }

    // .resume-item-links {
    //   font-style: italic;
    // }

    // .resume-skill-category {
    //   font-weight: bold;
    // }

    // .resume-certifications {
    //   list-style-type: disc;
    //   padding-left: 12px;
    // }

    // .resume-certification-link {
    //   font-weight: bold;
    // }

    // .resume-certification-authority {
    //   text-transform: capitalize;
    // }

    //   </style>

    // </head>
    // <body>
    //   <div class="resume-container">
    //     <div class="resume-content">
    //       <!-- Header -->
    //       <header class="resume-header">
    //         <h1 class="resume-title">${body.profile.name}</h1>
    //         <p class="resume-address">${body.profile.address}</p>
    //         <div class="resume-contact">
    //           ${
    //             body.profile.phone
    //               ? `<a href="tel:${body.profile.phone}" class="resume-contact-item"><svg class="icon"></svg> ${body.profile.phone}</a>`
    //               : ""
    //           }
    //           ${
    //             body.profile.email
    //               ? `<a href="mailto:${body.profile.email}" class="resume-contact-item"><svg class="icon"></svg> ${body.profile.email}</a>`
    //               : ""
    //           }
    //           ${
    //             body.profile.linkedin
    //               ? `<a href="${body.profile.linkedin}" class="resume-contact-item"><svg class="icon"></svg> LinkedIn</a>`
    //               : ""
    //           }
    //           ${
    //             body.profile.github
    //               ? `<a href="${body.profile.github}" class="resume-contact-item"><svg class="icon"></svg> Github</a>`
    //               : ""
    //           }
    //           ${
    //             body.profile.website
    //               ? `<a href="${body.profile.website}" class="resume-contact-item"><svg class="icon"></svg> Website</a>`
    //               : ""
    //           }
    //         </div>
    //       </header>

    //       <!-- Education -->
    //       ${
    //         body.educations.length > 0
    //           ? `<section class="resume-section"><h2 class="resume-section-title">Education</h2>${body.educations
    //               .map(
    //                 (edu: any, index: number) =>
    //                   `<div key=${index} class="resume-item"><div class="resume-item-header"><h3 class="resume-item-title">${
    //                     edu.institutionName
    //                   }</h3><span class="resume-item-date">${edu.startDate} - ${
    //                     edu.endDate
    //                   }</span></div><p>${edu.degree} - ${
    //                     edu.fieldOfStudy
    //                   } - CGPA: ${
    //                     edu.score
    //                   }</p><ul class="resume-item-list">${extractParagraphs(
    //                     edu.description
    //                   ).map((para) => `<li>${para}</li>`)}</ul></div>`
    //               )
    //               .join("")}</section>`
    //           : ""
    //       }

    //       <!-- Projects -->
    //       ${
    //         body.projects.length > 0
    //           ? `<section class="resume-section"><h2 class="resume-section-title">Projects</h2>${body.projects
    //               .map(
    //                 (project: any) =>
    //                   `<div key=${
    //                     project.projectId
    //                   } class="resume-item"><div class="resume-item-header"><h3 class="resume-item-title">${
    //                     project.projectName
    //                   }</h3></div><p class="resume-item-links">${
    //                     project.deploymentLink
    //                       ? `<a href=${project.deploymentLink}>Live Link</a>`
    //                       : ""
    //                   }${
    //                     project.repoLink
    //                       ? `<a href=${project.repoLink}> | Github Link</a>`
    //                       : ""
    //                   }</p><div class="resume-item-description">${
    //                     project.projectDescription
    //                   }</div></div>`
    //               )
    //               .join("")}</section>`
    //           : ""
    //       }

    //       <!-- Experiences -->
    //       ${
    //         body.experiences.length > 0
    //           ? `<section class="resume-section"><h2 class="resume-section-title">Experience</h2>${body.experiences
    //               .map(
    //                 (experience: any) =>
    //                   `<div key=${
    //                     experience.expId
    //                   } class="resume-item"><div class="resume-item-header"><h3 class="resume-item-title">${
    //                     experience.company
    //                   }</h3><span class="resume-item-date">${
    //                     experience.startDate
    //                   } - ${experience.endDate}</span></div>${
    //                     experience.role ? `<p>${experience.role}</p>` : ""
    //                   }<ul class="resume-item-list">${extractParagraphs(
    //                     experience.description
    //                   ).map((para) => `<li>${para}</li>`)}</ul></div>`
    //               )
    //               .join("")}</section>`
    //           : ""
    //       }

    //       <!-- Skills -->
    //       ${
    //         body.skills.length > 0
    //           ? `<section class="resume-section"><h2 class="resume-section-title">Skills</h2>${body.skills
    //               .map(
    //                 (skill: any) =>
    //                   `<div key=${skill.skillId}><span class="resume-skill-category">${skill.skillCategories}:</span> ${skill.skillList}</div>`
    //               )
    //               .join("")}</section>`
    //           : ""
    //       }

    //       <!-- Certifications -->
    //       ${
    //         body.certifications.length > 0
    //           ? `<section class="resume-section"><h2 class="resume-section-title">Certifications</h2><ul class="resume-certifications">${body.certifications
    //               .map(
    //                 (certification: any, index: number) =>
    //                   `<li key=${index}><a href=${certification.certificationProof} class="resume-certification-link">${certification.certificationName}</a> by <span class="resume-certification-authority">${certification.certificationAuthority}</span></li>`
    //               )
    //               .join("")}</ul></section>`
    //           : ""
    //       }
    //     </div>
    //   </div>
    // </body>
    // </html>
    // `;

    await page.setContent(htmlContent, {
      waitUntil: ["load", "domcontentloaded", "networkidle0"],
      timeout: 60000,
    });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        right: "10px",
        left: "10px",
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
