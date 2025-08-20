/**
 * main.tsx
 * Entry point for the ASF Website React application.
 * - Imports React's createRoot for rendering.
 * - Loads the main App component and global styles.
 * - Mounts the App component to the DOM element with id 'root'.
 */

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
