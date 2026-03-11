import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

// Configuração da fonte com os pesos necessários
const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Adicionei 900 para o seu "font-black" funcionar
});

export const metadata: Metadata = {
  title: "FullShield Cell - Blindagem Premium",
  description: "Proteção premium para o seu celular com acabamento profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* Aqui aplicamos tanto a classe padrão quanto a variável CSS.
          Isso resolve o erro de referência no seu page.tsx 
      */}
      <body className={`${notoSerif.variable} ${notoSerif.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}