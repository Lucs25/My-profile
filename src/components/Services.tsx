import {
  /*   HiCommandLine,
  HiDevicePhoneMobile, */
  HiComputerDesktop,
} from "react-icons/hi2";

export function Service() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, HTML5 e CSS3.",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    /*     {
      title: "Sistemas",
      description: "Desenvolvimento de sistemas e APIs REST com Node.js.",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
    {
      title: "Mobile",
      description: "Desenvolvimento de aplicativos Android e iOS.",
      icon: <HiDevicePhoneMobile className="h-12 w-12" />,
    }, */
  ];
  return (
    <section className="title">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">
          O que faço de melhor
        </p>

        <h2 className="m-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Projetos</span>
        </h2>
      </div>

      <div className="mt-6 flex text-center justify-center flex-col gap-2 md:flex-row">
        {services.map((service, index) => (
          <div
            className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white"
            key={`service-${index}`}
          >
            <div className="mb-2 flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-x1 font-bold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
