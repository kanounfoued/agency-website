import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function BasicLayout({ children }: LayoutProps) {
  return (
    <div style={{ backgroundColor: "var(--blue-background)" }}>
      <Container>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
  );
}
