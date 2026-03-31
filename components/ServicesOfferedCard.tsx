import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    image: "/images/employee-working-img.jpg",
    title: "OnPage",
    highlight: "-SEO",
    description:
      "Deine Inhalte, Meta-Tags und internen Verlinkungen werden professionell optimiert, damit du bei Google besser rankst und mehr qualifizierte Besucher anziehst.",
    arrw: "/images/up-arw.svg",
  },
  {
    id: 2,
    image: "/images/Servicesoffered2.jpg",
    title: "OffPage",
    highlight: "-SEO",
    description:
      "Für dich werden hochwertige Backlinks aufgebaut, um deine Online-Reputation zu stärken und deine Autorität bei Google zu steigern.",
    arrw: "/images/up-arw.svg",
  },
  {
    id: 3,
    image: "/images/Servicesoffered3.jpg", 
    title: "", 
    highlight: "Technisches SEO",
    description:
      "Die Struktur deiner Website wird umfassend optimiert...",
    arrw: "/images/up-arw.svg",
  },
  {
    id: 4,
    image: "/images/Servicesoffered4.jpg", 
    title: "", 
    highlight: "Local SEO",
    description:
      "Dein Unternehmen wird gezielt für lokale Suchanfragen sichtbar gemacht – durch Google My Business, lokale Verzeichnisse und branchenspezifische Optimierungen.",
    arrw: "/images/up-arw.svg",
  },
 {
    id: 5,
    image: "/images/Servicesoffered5.jpg", 
    title: "", 
    highlight: "E-Commerce SEO",
    description:
      "Deine Produkt- und Kategorieseiten werden strategisch optimiert, um deine Verkäufe durch verbesserte Sichtbarkeit und Benutzerfreundlichkeit zu steigern.",
    arrw: "/images/up-arw.svg",
  },
 {
    id: 6,
    image: "/images/Servicesoffered6.jpg", 
    title: "", 
    highlight: "Mobile SEO",
    description:
      "Deine Website wird für mobile Endgeräte optimiert, damit sie auch mobil reibungslos funktioniert und besser bei Google rankt.",
    arrw: "/images/up-arw.svg",
  },
  {
    id: 7,
    image: "/images/Servicesoffered7.jpg", 
    title: "", 
    highlight: "Content-Marketing",
    description:
      "Für dich werden zielgerichtete Inhalte erstellt, die deine Sichtbarkeit erhöhen und mehr potenzielle Kunden effektiv ansprechen.",
    arrw: "/images/up-arw.svg",
  },
  {
    id: 8,
    image: "/images/Servicesoffered8.jpg", 
    title: "", 
    highlight: "SEO-Analyse und Reporting",
    description:
      "Deine Website wird kontinuierlich überwacht und analysiert, damit du stets aktuelle Berichte erhältst und deine Fortschritte klar im Blick behältst.",
    arrw: "/images/up-arw.svg",
  },
  
];

export const ServicesOfferedCard = () => {
  return (
    <div className="grid grid-cols-4 gap-6 items-center">
      
      {servicesData.map((item) => (
        <div
          key={item.id}
          className='group transition-all duration-500 ease-in-out bg-[url("/images/Servicesoffered-bg.png")] bg-cover bg-center cursor-pointer rounded-lg p-4 shadow-4xl'
        >
          {/* Image */}
          <div className='flex flex-col h-40 group-hover:h-48 transition-all duration-500 ease-in-out'>
            <Image
              src={item.image}
              alt={item.title || item.highlight}
              width={250}
              height={160}
              className='rounded-lg w-full h-full object-cover object-center'
            />
          </div>

          {/* Content */}
          <div className='mt-4'>
            <h3 className='text-white-1100 text-base leading-[140%] font-bold'>
              {item.title}
              <span className='group-hover:text-yellow14 transition-all duration-500 ease-in-out'>
                {item.highlight}
              </span>
            </h3>

            <p className='text-white-1100 text-xs leading-[140%] font-normal mt-2 mb- min-h-22.5'>
              {item.description}
            </p>

            <Link
              href={'#'}
              className='flex items-center justify-center w-8 h-8 ml-auto border border-solid border-white-1100 group-hover:border-yellow14 rounded-full transition-all duration-500 ease-in-out'
            >
              <Image
                src={item.arrw}
                alt="arrow"
                width={9}
                height={9}
                className='group-hover:rotate-90 transition-all duration-500 ease-in-out'
              />
            </Link>
          </div>
        </div>
      ))}

    </div>
  )
}