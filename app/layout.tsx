import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const nexaBlack = localFont({
  src: "../public/fonts/nexa-black.otf",
  variable: "--font-nexa-black",
});

const nexaRegular = localFont({
  src: "../public/fonts/nexa-regular.otf",
  variable: "--font-nexa-regular",
});

const nexaRegularItalic = localFont({
  src: "../public/fonts/nexa-regular-italic.ttf",
  variable: "--font-nexa-regular-italic",
});

const nexaExtraLightItalic = localFont({
  src: "../public/fonts/nexa-extralight-italic.ttf",
  variable: "--font-nexa-extralight-italic",
});

export const metadata: Metadata = {
  title: "B7 bodyfitness",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.bunny.net/css?family=nexa:400,700"
          rel="stylesheet"
        />
      </Head>
      <html
        lang="pt-br"
        className={`${nexaBlack.variable} ${nexaRegular.variable} ${nexaRegularItalic.variable} ${nexaExtraLightItalic.variable}`}
      >
        <body className="antialiased">{children}</body>
      </html>
    </>
  );
}
