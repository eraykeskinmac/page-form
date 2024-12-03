# Page Form: Next.js Form Builder

Welcome to **Page-Form**, a dynamic and user-friendly form builder designed with **Next.js**. This project simplifies the process of creating, designing, and managing forms, making it ideal for developers and designers seeking an efficient way to handle form-related tasks.

## 🚀 Key Features

### 🛠️ **Form Building Interface**
- Intuitive drag-and-drop interface for easy form creation.
- Integrated buttons for previewing, saving, and publishing forms.

### 🎨 **Form Designing Tool**
- Customizable design canvas for form elements.
- Manageable state for form designs, enhancing user interaction.

### 📑 **Sidebar Components**
- Dedicated sidebars for selecting and configuring form elements.
- Properties sidebar for detailed element customization.

### 🌈 **Theme Switching**
- Supports light, dark, and system themes for a personalized user experience.

### 🔄 **Context and Hooks**
- Efficient state management for seamless component interaction.

### 💾 **Database Integration**
- Prisma integration for robust backend form data management.

### 📊 **Form Schema**
- Defined schema for form data, ensuring consistency and validation.

## 🎯 General Purpose

Page-Form is designed to streamline the form creation and design process. Whether you're building simple contact forms or complex data collection interfaces, this project offers the tools and flexibility needed to create forms that are both functional and aesthetically pleasing. With its user-friendly interface and powerful features, Page-Form is an excellent choice for developers and designers alike.

## 🛠️ Installation

To get started with this project, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.

    ```sh
    git clone https://github.com/your-username/page-form.git
    ```

2. **Install Dependencies**: Navigate to the project directory and install the dependencies.

    ```sh
    cd page-form
    npm install
    ```

3. **Set Up Environment Variables**: Create a `.env` file in the root directory and add the following environment variables:

    ```env
    POSTGRES_URL=your_postgres_url
    POSTGRES_URL_NO_SSL=vercel_postgres
    POSTGRES_USER=vercel_postgres
    POSTGRES_HOST=vercel_postgres
    POSTGRES_PASSWORD=vercel_postgres
    POSTGRES_DATABASE=vercel_postgres
    POSTGRES_PRISMA_URL=your_postgres_prisma_url
    POSTGRES_URL_NON_POOLING=your_postgres_non_pooling_url
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    ```

4. **Run Database Migrations**: Run Prisma migrations to set up your database schema.

    ```sh
    npx prisma migrate dev
    ```

5. **Start the Development Server**: Start the Next.js development server.

    ```sh
    npm run dev
    ```

## 🤝 Contributing

We welcome contributions to the `page-form` project. By participating, you agree to abide by the project’s Code of Conduct.

### How to Contribute

1. **Fork the Repository**: Click the "Fork" button at the top right of this page to create a copy of this repository on your GitHub account.

2. **Clone Your Fork**: Clone your forked repository to your local machine.

    ```sh
    git clone https://github.com/your-username/page-form.git
    ```

3. **Create a Branch**: Create a new branch for your feature or bug fix.

    ```sh
    git checkout -b your-branch-name
    ```

4. **Make Your Changes**: Make your changes to the codebase. Ensure your code follows the project's coding conventions and passes any tests.

5. **Commit Your Changes**: Commit your changes with a descriptive commit message.

    ```sh
    git add .
    git commit -m "Description of your changes"
    ```

6. **Push to Your Fork**: Push your changes to your forked repository on GitHub.

    ```sh
    git push origin your-branch-name
    ```

7. **Submit a Pull Request**: Go to the original repository on GitHub and create a pull request. Describe your changes and the problem they solve.

## Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Reporting Issues

If you find a bug or have a feature request, please report it by opening an issue on the [GitHub Issue Tracker](https://github.com/eraykeskinmac/page-form/issues).

Thank you for your contributions!
