import localFont from "next/font/local";
import "./globals.css";
import Home from "./page";

export const metadata = {
  title: "Nishant",
  description: "Created By NIshant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {
          <Home/>
        }
      </body>
    </html>
  );
}
