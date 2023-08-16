import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import FormContextProvider from "@/context/FormContext";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Multi-step form",
  description: "Multi-step form project from FrontendMentor.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <FormContextProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </FormContextProvider>
      </body>
    </html>
  );
}
