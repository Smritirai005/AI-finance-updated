import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from "@/components/ui/theme-provider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fealth",
  description: "One sop finance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className="dark">
        <body className={`${inter.className}`}>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-blue-50 dark:bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
                <p>Made with 💗 by Smriti</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
