import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home flex justify-start items-center p-8" id="home">
        <header className="container mx-auto ">
          <h1 className="pb-5 text-5xl md:text-6xl lg:text-8xl text-white font-bold my-3 relative before:bottom-0 before:absolute before:w-1/4 before:h-0.5 before:bg-blue-500">
            <span className="text-blue-400">L</span>
            <span className="text-green-300">E</span>
            <span className="text-yellow-300">A</span>
            <span className="text-red-300">R</span>
            <span className="text-fuchsia-300">N</span>OVA
          </h1>
          <p className="text-2xl md:text-3xl lg:text-5xl text-white ">
            Unlimited Learning Enjoyment
          </p>
        </header>
      </div>

      <section id="about" className="about h-screen pt-20">
        <div className="container mx-auto flex items-center flex-wrap p-8">
          <div className="w-1/2 flex-1/2">
            <h2 className="title min-w-3xs max-w-2xs">
              About The <span>Company</span>
            </h2>
            <p className="text-xl leading-10">
              Learnova is an innovative educational company offering customized
              training solutions tailored to meet the unique needs of companies,
              institutions, and schools. Our mission is to deliver exceptional
              training programs that enhance skill development and promote
              excellence in education.
            </p>
            <Button title="Learn More" />
          </div>
          <div className="min-w-2xs flex-1/3">
            <Image
              src={"/images/about.jpeg"}
              alt="about"
              width={1100}
              height={1100}
            />
          </div>
        </div>
      </section>
    </>
  );
}
