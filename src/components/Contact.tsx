import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";

export function Contact() {
  const contacts = [
    {
      name: "WhatsApp",
      description: "+55 11 9.7289-8108",
      link: "https://wa.me/5512982041640?text=Olá...",
      icon: <FaWhatsapp className="h-10 w-10" />,
    },
    {
      name: "Email",
      description: "lucs.25@hotmail.com",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },
    {
      name: "Mirante da mata",
      description: "Cotia, SP",
      link: "https://goo.gl/maps/GhPtzBr6dsc3fbUT7",
      icon: <HiOutlineMapPin className="h-10 w-10" />,
    },
  ];

  return (
    <section className="gradient text-white">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2 text-center">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Fale
            </span>
            <span className="font-handwriting text-4xl">Comigo</span>
          </h2>
        </div>

        <div className="flex gap-2 justify-center">
          <div className="flex justify-center  flex-col gap-4 md:flex-row">
            {contacts.map((contact, index) => (
              <div
                key={`contact-${index}`}
                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
              >
                {contact.icon}
                <div>
                  <p className="font-headline font-semibold">{contact.name}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="text-gray-300 underline underline-offset-2"
                  >
                    {contact.description}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
