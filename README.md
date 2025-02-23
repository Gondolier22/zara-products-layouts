# Zara Products Layouts

## Purpose

The purpose of this application is to provide a user-friendly interface for managing and organizing product layouts for Zara. Users can drag and drop product cards to create custom layouts, making it easier to visualize and manage product displays.

## File Structure

The project is organized as follows:

```
/c:/WebApps/zara-products-layouts/
├── public/                     # Public assets
├── src/                        # Source code
│   ├── components/             # Reusable components
│   │   ├── product-card/       # Product card component
│   │   │   ├── hooks/          # Hooks for product card
│   │   │   └── product-card.component.tsx
│   ├── pages/                  # Application pages
│   │   ├── editor/             # Editor page
│   │   │   ├── components/     # Components specific to the editor page
│   │   │   │   └── file-management-form/
│   │   │   │       ├── file-management-form.component.tsx
│   │   │   │       └── file-management-form.component.scss
│   │   │   ├── hooks/          # Hooks for the editor page
│   │   │   │   └── use-editor-page.controller.ts
│   │   │   └── editor.page.tsx
│   ├── styles/                 # Global styles
│   │   └── components/         # Component-specific styles
│   │       ├── product-card.component.scss
│   │       └── files-magement-form.component.scss
│   ├── models/                 # TypeScript models
│   ├── store/                  # State management
│   └── utils/                  # Utility functions
├── .eslintrc.js                # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

## Installation

To install and run the application locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/gondolier22/zara-products-layouts.git
   cd zara-products-layouts
   ```

2. **Install dependencies:**

   Using npm:

   ```sh
   npm install
   ```

   Or using yarn:

   ```sh
   yarn install
   ```

3. **Run the application:**

   Using npm:

   ```sh
   npm run dev
   ```

   Or using yarn:

   ```sh
   yarn dev
   ```

4. **Open the application in your browser:**

   Navigate to `http://localhost:3000` to view the application.

## Usage

- **Editor Page:** The main interface for managing product layouts. You can drag and drop product cards to create custom layouts.
- **File Management Form:** A form for managing file alignments and other properties.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
