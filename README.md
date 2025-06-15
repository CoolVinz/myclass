# MyClass - Online Learning Platform

A modern, responsive web application for online learning built with Next.js, Tailwind CSS, and Shadcn UI. Students can browse courses, view detailed course information, and track their learning progress.

## ✨ Features

- **Modern UI/UX** - Clean, responsive design with Shadcn UI components
- **Course Catalog** - Browse and search through available courses
- **Course Details** - Detailed course pages with lesson breakdowns
- **Filtering & Search** - Filter courses by level and search by keywords
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **TypeScript** - Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Future**: Supabase integration planned for authentication and database

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/CoolVinz/myclass.git
   cd myclass
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── courses/        # Course listing and individual course pages
│   ├── layout.tsx      # Root layout with navigation
│   └── page.tsx        # Homepage
├── components/         # Reusable UI components
│   ├── ui/            # Shadcn UI components
│   ├── layout/        # Navigation and footer components
│   └── course/        # Course-specific components
├── data/              # Static course data
├── types/             # TypeScript type definitions
└── lib/               # Utility functions
```

## 🎯 Current Features

- **Homepage**: Hero section with featured courses and benefits
- **Course Catalog**: Complete listing with search and filtering
- **Course Details**: Individual course pages with lesson information
- **Responsive Navigation**: Mobile-friendly navigation bar
- **Static Content**: Sample courses with realistic data

## 🔮 Future Enhancements

- User authentication with Supabase
- User progress tracking
- Video lesson integration
- Interactive quizzes and assignments
- User dashboard
- Course enrollment system
- Payment integration

## 🤝 Contributing

This project is open for contributions. Feel free to fork the repository and submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
