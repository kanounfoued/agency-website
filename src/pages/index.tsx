import Image from "next/image";
import Container from "@/components/Container/Container";
import Typography, { LevelProps } from "@/components/Typography/Typography";

export default function Page() {
  return (
    <div className="secondary-wrapper">
      <Container>
        <header className="flex justify-between flex-nowrap px-8 py-12">
          <div className="w-[40%]">
            <Typography level={LevelProps.h5}>Modern Studio</Typography>
            <Typography level={LevelProps.h1}>
              We’re Help To Build Your Dream Project
            </Typography>
            <Typography level={LevelProps.h5}>
              Agency provides a full service range including technical skills,
              design, business understanding.
            </Typography>
          </div>

          <div className="p-8 w-[55%]">
            <Image
              className="ml-auto"
              src="/images/header-img.png"
              alt="hero"
              height={602}
              width={570}
            />
          </div>
        </header>
      </Container>
    </div>
  );
}
