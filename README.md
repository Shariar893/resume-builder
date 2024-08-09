# Resume Builder Application

## Overview

This project is a Next.js application designed to help users create and customize resumes based on job type and experience. The application offers a real-time preview of the resume and allows users to download the resume as a PDF. It provides a responsive design for optimal use across devices.

## Features

- **Real-time Resume Preview:** Users can see how their resume will look as they input data.
- **Downloadable PDFs:** Convert resumes to PDFs using Puppeteer.
- **Customization Options:** Tailor resumes based on job type and experience.
- **Guest and Logged-in User Modes:** 
  - **Guest Users:** Data is stored locally in the browser.
  - **Logged-in Users:** Data is stored securely in PostgreSQL.
- **Responsive Design:** Ensures usability on various devices using Tailwind CSS.

## Technologies Used

- **Next.js 14**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **PostgreSQL**
- **Prisma**
- **Puppeteer**
- **React Redux**
- **Zod**
- **React Hook Form**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/resume-builder.git
   
2. Navigate to the project directory:

   ```bash
   cd resume-builder
   
3. Install dependencies:

   ```bash
   npm install
   
4. Run the development server:

   ```bash
   npm run dev
