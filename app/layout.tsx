import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Davi Dev — Roblox Developer",
  description: "Portfólio de Davi, desenvolvedor Roblox: scripting Lua, sistemas de jogo e jogos com milhões de visitas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-[family-name:var(--font-sora)] antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
