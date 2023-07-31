import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper/Wrapper";

type LayoutProps = {
  children: React.ReactNode;
};

export default function BasicLayout({ children }: LayoutProps) {
  return (
    <>
      <Wrapper className="secondary-wrapper">
        <Container>
          <Navbar />
        </Container>
      </Wrapper>

      <main>{children}</main>

      <Wrapper className="primary-wrapper">
        <Container>
          <Footer />
        </Container>
      </Wrapper>
    </>
  );
}
