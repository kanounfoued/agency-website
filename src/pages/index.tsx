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
    <div>
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
      </div>

      <section className="primary-wrapper">
        <Container>
          {/* Brands */}
          <div className="flex py-12 justify-between gap-8 px-8 flex-wrap border-y border-[--main-border-color] mb-24">
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

          {/* About */}
          <div className="flex gap-24 px-8 content-center mb-40">
            <div className="">
              <Image
                className="ml-auto"
                src="/images/exp-design-agency.png"
                alt="exp-design-agency"
                height={602}
                width={570}
              />
            </div>

            <div className="w-[40%] p-8">
              <Typography className="mb-5" level={LevelProps.h5}>
                About
              </Typography>
              <Typography className="mb-6" level={LevelProps.h3}>
                An Experience Design Agency
              </Typography>
              <Typography className="mb-5" level={LevelProps.text}>
                Provides a full service range
              </Typography>
              <Typography className="mb-8" level={LevelProps.gray_text}>
                Ability to put themselves in the merchant&apos;s shoes. It is
                meant to partner on the long run, and work as an extension of
                the merchant&apos;s team.
              </Typography>

              <Button className="bg-white" type="secondary" label="ABOUT US" />
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 mb-36 px-8">
            <div className="mw-[24rem] p-9 border-l border-t border-b border-[--main-border-color]">
              <Typography level={LevelProps.h3}>42%</Typography>
              <Typography level={LevelProps.text}>
                Years of experience
              </Typography>
            </div>
            <div className="mw-[24rem] p-9 border-l border-t border-b border-r border-[--main-border-color]">
              <Typography level={LevelProps.h3}>73+</Typography>
              <Typography level={LevelProps.text}>Agency members</Typography>
            </div>
            <div className="mw-[24rem] p-9 border-r border-t border-b border-[--main-border-color]">
              <Typography level={LevelProps.h3}>5.000</Typography>
              <Typography level={LevelProps.text}>Projects complete</Typography>
            </div>
          </div>

          {/* How We Work */}
          <div className="grid grid-cols-2 gap-24 px-8 pb-24 mb-36 border-b border-[--main-border-color]">
            <div>
              <Typography className="mb-5" level={LevelProps.h5}>
                How we work
              </Typography>
              <Typography className="mb-6" level={LevelProps.h3}>
                Making Your Projects Look Awesome
              </Typography>
              <Typography className="mb-8" level={LevelProps.gray_text}>
                Technical skills, design, business understanding, ability to put
                themselves in the merchant&apos;s shoes.
              </Typography>

              <Button type="text" label="Read More" />
            </div>

            <div className="mt-12">
              <div className="flex gap-4 justify-start content-center py-4">
                <Typography className="w-[40px]" level={LevelProps.h2}>
                  1
                </Typography>
                <Typography className="px-8 py-4" level={LevelProps.h4}>
                  Full service range including
                </Typography>
              </div>
              <div className="flex gap-4 justify-start content-center py-4">
                <Typography className="w-[40px]" level={LevelProps.h2}>
                  2
                </Typography>
                <Typography className="px-8 py-4" level={LevelProps.h4}>
                  Technical skills, design, business
                </Typography>
              </div>
              <div className="flex gap-4 justify-start content-center py-4">
                <Typography className="w-[40px]" level={LevelProps.h2}>
                  3
                </Typography>
                <Typography className="px-8 py-4" level={LevelProps.h4}>
                  Themselves in the merchant&apos;s
                </Typography>
              </div>
            </div>
          </div>

          {/* Video Reel */}
          <div className="grid grid-cols-2 gap-24 mb-64 px-8">
            <div className="mr-auto">
              <Image
                className="ml-auto"
                src="/images/video-reel.png"
                alt="video-reel"
                height={368}
                width={570}
              />
            </div>

            <div className="p-12">
              <Typography className="mb-5" level={LevelProps.h5}>
                Video Reel
              </Typography>
              <Typography className="mb-6" level={LevelProps.h3}>
                Unlock The Greatest Value Possible
              </Typography>
              <Typography className="mb-8" level={LevelProps.gray_text}>
                Design, business understanding, ability to put themselves in the
                merchant&apos;s shoes meant to partner.
              </Typography>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-24 mb-24 px-8">
            <div className="py-28">
              <Typography className="mb-5" level={LevelProps.h5}>
                Features
              </Typography>
              <Typography className="mb-6" level={LevelProps.h3}>
                Give Your Site A New Look
              </Typography>
              <Typography className="mb-8" level={LevelProps.text}>
                Service range including technical skills, design, business
                understanding.
              </Typography>

              <ul>
                <li className="flex justify-start content-center py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <circle cx="16" cy="16" r="16" fill="#EF6C57" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.9206C9.07075 15.3461 11.734 16.1698 13.75 17.465C16.1178 14.3345 20.371 11.406 25 9C20.6042 13.2739 16.9668 18.1236 14.5 23C12.5118 20.2129 10.3398 17.6189 7 14.9206Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <Typography
                    className="px-4 py-1"
                    level={LevelProps.gray_text}
                  >
                    Range including technical skills
                  </Typography>
                </li>
                <li className="flex justify-start content-center py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <circle cx="16" cy="16" r="16" fill="#EF6C57" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.9206C9.07075 15.3461 11.734 16.1698 13.75 17.465C16.1178 14.3345 20.371 11.406 25 9C20.6042 13.2739 16.9668 18.1236 14.5 23C12.5118 20.2129 10.3398 17.6189 7 14.9206Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <Typography
                    className="px-4 py-1"
                    level={LevelProps.gray_text}
                  >
                    Business understanding
                  </Typography>
                </li>
                <li className="flex justify-start content-center py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <circle cx="16" cy="16" r="16" fill="#EF6C57" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.9206C9.07075 15.3461 11.734 16.1698 13.75 17.465C16.1178 14.3345 20.371 11.406 25 9C20.6042 13.2739 16.9668 18.1236 14.5 23C12.5118 20.2129 10.3398 17.6189 7 14.9206Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <Typography
                    className="px-4 py-1"
                    level={LevelProps.gray_text}
                  >
                    Partner on the long run
                  </Typography>
                </li>
              </ul>
            </div>

            <div className="p-20">
              <Image
                className="ml-auto"
                src="/images/features-epic.png"
                alt="features-epic"
                height={368}
                width={570}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 mb-24 px-8">
            <div className="p-[5rem] pl-[0] pr-[13rem]">
              <Typography level={LevelProps.h5}>Features</Typography>
              <Typography className="mt-[2rem]" level={LevelProps.text}>
                Long run, and work as an extension of the merchant&apos;s team.
              </Typography>
              <Button className="mt-[2rem]" type="text" label="Read More" />
            </div>

            <div className="flex items-end">
              <div className="bg-white p-8 h-[300px] w-[300px] border border-[#F3D1BF]">
                <div className="flex align-center justify-center h-[80px] w-[80px] p-4 rounded-full bg-[#EF6C57]">
                  <Image
                    src="/design-shape-icon.svg"
                    alt="exp-design-agency"
                    height={15}
                    width={15}
                  />
                </div>
                <Typography
                  className="mt-[2rem] !font-bold"
                  level={LevelProps.text}
                >
                  Professional
                </Typography>
                <Typography className="mt-[2rem]" level={LevelProps.small_text}>
                  Full service range including technical skills, design.
                </Typography>
              </div>
              <div className="p-8 h-[240px] w-[300px] border border-[#F3D1BF]">
                <Typography
                  className="mt-[3rem] !font-bold"
                  level={LevelProps.text}
                >
                  Accessibility
                </Typography>
                <Typography className="mt-[2rem]" level={LevelProps.small_text}>
                  Business understanding, ability to put themselves.{" "}
                </Typography>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-2 gap-12 mb-24 px-8">
            <div>
              <Image
                src="/images/service-epic.png"
                alt="service epic"
                height={80}
                width={570}
              />
            </div>

            <div className="py-8">
              <Typography level={LevelProps.h5}>SERVICE</Typography>
              <Typography className="mt-[2rem]" level={LevelProps.h2}>
                Making Complex Digital Products
              </Typography>
              <Typography className="mt-[2rem]" level={LevelProps.big_text}>
                Agency provides a full service range including technical skills,
                design, business.
              </Typography>

              <div>
                <div className="flex justify-center items-center mt-[2rem]">
                  <Image
                    src="/images/jenny-murtaugh.png"
                    alt="Jenny murtaugh"
                    height={64}
                    width={64}
                  />

                  <Typography
                    className="ml-[2rem]"
                    level={LevelProps.gray_text}
                  >
                    &ldquo;Understanding, ability to put themselves in the
                    merchant&apos;s shoes. It is meant to partner.&rdquo;
                  </Typography>
                </div>
                <Typography className="ml-20" level={LevelProps.big_text}>
                  Jenny Murtaugh
                </Typography>
              </div>

              <Button
                className="bg-white mt-[2rem]"
                type="secondary"
                label="Explore"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 mb-24 px-8">
            <Typography level={LevelProps.h5}>SERVICE</Typography>
            <Typography className="mt-4" level={LevelProps.h3}>
              How Our Agency <br /> Can Help
            </Typography>

            <div className="grid grid-cols-3 mt-12">
              <div className="border border-[#F3D1BF] p-12">
                <div className="flex justify-center items-center h-[80px] w-[80px] bg-[#EF6C57] rounded-full">
                  <Image
                    src="/icon/board-icon.png"
                    alt="board icon"
                    height={30}
                    width={30}
                  />
                </div>
                <Typography className="mt-8 !font-bold" level={LevelProps.text}>
                  Design
                </Typography>
                <Typography className="mt-6" level={LevelProps.gray_text}>
                  Agency provides a full service range including technical
                  skills, design.
                </Typography>
                <Button className="mt-8" type="text" label="Learn More" />
              </div>
              <div className="border border-[#F3D1BF] p-12">
                <div className="flex justify-center items-center h-[80px] w-[80px] bg-[#EF6C57] rounded-full">
                  <Image
                    src="/icon/hand-bag-icon.png"
                    alt="hand bag icon"
                    height={30}
                    width={30}
                  />
                </div>
                <Typography className="mt-8 !font-bold" level={LevelProps.text}>
                  Development
                </Typography>
                <Typography className="mt-6" level={LevelProps.gray_text}>
                  Full service range including technical skills, design,
                  business.
                </Typography>
                <Button className="mt-8" type="text" label="Discover More" />
              </div>
              <div className="border border-[#F3D1BF] p-12">
                <div className="flex justify-center items-center h-[80px] w-[80px] bg-[#EF6C57] rounded-full">
                  <Image
                    src="/icon/cog-icon.png"
                    alt="cog icon"
                    height={30}
                    width={30}
                  />
                </div>
                <Typography className="mt-8 !font-bold" level={LevelProps.text}>
                  Marketing
                </Typography>
                <Typography className="mt-6" level={LevelProps.gray_text}>
                  Technical skills, design, business understanding, ability.
                </Typography>
                <Button className="mt-8" type="text" label="Explore More" />
              </div>
            </div>
          </div>

          <div className="h-[10px]"></div>
        </Container>
      </section>
    </div>
  );
}
