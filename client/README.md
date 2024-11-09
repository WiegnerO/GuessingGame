# React + TypeScript + Vite

## Todo
- Add login logic
- Create the Game page

## File Structure and Naming Conventions

| Type            | Location           | Folder/File Naming Convention         | Folder Description                                 |
|-----------------|--------------------|-------------------------------------|---------------------------------------------------|
| Root            | `/src/`            | camelCase  (e.g., `myComponent`)    | Is the root of the project and should contain minimal folders/files |
| Components      | `/src/components/` | PascalCase (e.g., `MyComponent`)    | Contains reusable UI components for the application |
| Hooks           | `/src/hooks/`      | camelCase (e.g., `useMyCustomHook`) | Custom React hooks for logic reusability          |
| lib             | `/src/lib/`        | camelCase (e.g., `my`)              | Is for any code that is not react specific (Utility/helper functions used across the app)     |
| Pages           | `/src/pages/`      | PascalCase (e.g., `HomePage`)       | Page-level components representing routes         |
| Models          | `/src/models/`     | PascalCase (e.g., `MyModel`)        | Contains global or component-specific styles      |

## Variable Naming Conventions

| Type            |  Variable Naming Convention        | Variable Description                              |
|-----------------|------------------------------------|---------------------------------------------------|
| Constants       |  UPPER_CASE (e.g., `API_URL`)      | Stores constant values used throughout the app    |
