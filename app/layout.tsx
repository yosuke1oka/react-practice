import "./globals.css";
import Menu from "./menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
