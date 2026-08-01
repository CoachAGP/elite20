import "./globals.css";

export const metadata = {
  title: "Ta'Quan Zimmerman Elite 20 Invitational",
  description:
    "Free NBA-partnered high school All-American basketball event supporting Be A Baller Not A Bully."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
