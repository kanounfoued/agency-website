import Image from "next/image";
import Container from "@/components/Container/Container";
import Typography, { LevelProps } from "@/components/Typography/Typography";
import Button from "@/components/Button";

export default function Page() {
  const brands = [
    "digital-slide.png",
    "vortex.png",
    "travel-explorer.png",
    "fuzion.png",
    "media-fury.png",
  ];

  return (
    <div className="secondary-wrapper">
      <Container>
        <header className="flex justify-between flex-nowrap px-8 py-12 gap-8">
          <div className="w-[40%]">
            <Typography level={LevelProps.h5}>Modern Studio</Typography>
            <Typography level={LevelProps.h1} className="mt-6">
              We’re Help To Build Your Dream Project
            </Typography>
            <Typography level={LevelProps.gray_text} className="mt-6">
              Agency provides a full service range including technical skills,
              design, business understanding.
            </Typography>

            <div className="flex mt-10 gap-4">
              <Button label="How We Work" type="primary" />
              <Button label="Contact Us" type="text" />
            </div>

            <div className="flex gap-8 mt-20">
              <div className="h-[3rem] w-[3rem] border overflow-hidden rounded-full relative">
                <Image src="/images/meta-inc.png" alt="meta-inc" fill />
              </div>

              <div>
                <Typography level={LevelProps.gray_text}>
                  &ldquo;Put themselves in the merchant&apos;s shoes&rdquo;
                </Typography>
                <Typography level={LevelProps.text}>Meta Inc.</Typography>
              </div>
            </div>
          </div>

          <div className="p-4 w-[55%]">
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

      <section className="primary-wrapper">
        <Container>
          <div className="flex py-12 justify-between gap-8 px-8 flex-wrap border-y border-[--main-border-color]">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex relative justify-center items-center p-4"
              >
                <Image
                  src={`/images/${brand}`}
                  alt={`${brand}`}
                  height={25}
                  width={147}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
