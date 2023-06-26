import { HiDownload } from "react-icons/hi";
import CV from "../assets/Lucas_TI1.pdf";

export function Hero() {
  return (
    <section className="gradient">
      <div className="container mx-auto max-w-4xl p-2 py-12">
        {/*Depois inserir flex */}
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-3xl text-center md:text-left">
              Olá, me chamo
            </span>
            <span className="font-headline text-5xl font-semibold ">
              Lucas de Paula
            </span>
            <span className="font-headline text-5xl font-light text-blue-400 ml-2">
              Raymundo
            </span>
          </h1>

          <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
            <div className="h-1 w-12 rounded-full bg-blue-800" />
            Desenvolvedor Front-End
          </h2>

          <p className="text-gray-200 my-6 text-center md:text-left">
            Em março de 2022, iniciei minha jornada focada no desenvolvimento
            front-end. Tenho adquirido conhecimentos em tecnologias como CSS
            (Saas, Bootstrap, styled components), React, JavaScript, Git &
            Github, SQL Server, UI e prototipação de design de interface com
            Figma.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <a href="#" className="underline font-bold text-white">
              Fale comigo
            </a>
            <span className="italic text-gray-500">ou</span>
            <a
              href={CV}
              download
              className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <HiDownload />
              Baixe meu CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
