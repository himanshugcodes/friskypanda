import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
import Footer from "../component/Footer";

export const metadata = {
  title: "Frisky Panda",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
