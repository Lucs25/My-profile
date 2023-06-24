export function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="relative text-blue-900 font-bold z-10">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Informações sobre meus projetos
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40"></div>
      </div>

      <div className="relative mx-auto mt-20 max-w-lg">
        <div className="relative bg-blue-100 w-full rounded-lg p-4 ps-20 md:h-64 md:ps-48">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá</p>
            <span className="mr-1">Meu nome é</span>
            <span className="font-headline font-bold uppercase text-blue-900">
              Lucas de Paula
            </span>
            <span className="font-headline font-bold uppercase text-blue-400 ml-2">
              Raymundo
            </span>
          </div>
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-cover bg-center md:-left-12 md:-12top md:h-72 md:w-56">
            MINHA FOTO 1;37
          </div>
        </div>
      </div>
    </section>
  );
}
