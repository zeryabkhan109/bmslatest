"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    service: "Ein individuelles Angebot",
    name: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    questions: "",
  });

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Ein individuelles Angebot für SEO-Dienstleistungen",
    "Kostenloser SEO-Performance-Check",
    "Kostenlose Beratung für deine SEO-Strategie",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Close dropdown outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="">

      {/* Form */}
      <form>
        <div className="mb-6" ref={dropdownRef}>
          <label className="text-white-1100 text-sm leading-[124%] font-normal block mb-2">Entdecke dein Potenzial – lass uns deine Website optimieren und sichtbarer machen!</label>
          <div className="relative">
            <div onClick={() => setOpen(!open)}
              className="input-style flex justify-between items-center cursor-pointer rounded-sm border border-solid border-white/50 bg-black-1200/40 px-4 py-3"
            >
              <span className="text-white-1100 font-normal text-base leading-[140%] flex items-center">{form.service}</span>

              <span
                className={`flex items-center justify-center w-8 h-8 transition-transform duration-300 ${open ? "rotate-90" : ""
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.428 9.428L1.88533 16.9707L0 15.0853L6.6 8.48533L0 1.88533L1.88533 0L9.428 7.54267C9.67796 7.7927 9.81838 8.13178 9.81838 8.48533C9.81838 8.83888 9.67796 9.17796 9.428 9.428Z" fill="#FDFDFD" />
                </svg>
              </span>
            </div>

            {/* Dropdown List */}
            {open && (
              <div className="absolute top-14 left-0 mt-2 w-full border border-white/50 rounded-sm bg-black-1100 shadow-5xl py-4 px-2 overflow-hidden">
                {options.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setForm({ ...form, service: item });
                      setOpen(false);
                    }}
                    className="p-2 text-white/50 hover:text-white-1100 focus:text-orange3 active:text-orange3 font-normal text-base leading-[140%] flex items-center cursor-pointer transition mb-2 last-of-type:mb-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-white-1100 text-sm leading-[124%] font-normal block mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder=""
              value={form.name}
              onChange={handleChange}
              className="input-style bg-black-1200/40 hover:bg-white/2 px-4 border border-solid border-white/50 hover:border-grey-1100 rounded-sm h-11.5 w-full text-white-1100 placeholder:text-white-1100 text-base leading-[140%] font-normal active:bg-white/10 focus:bg-white/10"
            />
          </div>

          <div>
            <label className="text-white-1100 text-sm leading-[124%] font-normal block mb-2">Unternehmensname</label>
            <input
              type="text"
              name="company"
              placeholder=""
              value={form.company}
              onChange={handleChange}
              className="input-style bg-black-1200/40 hover:bg-white/2 px-4 border border-solid border-white/50 hover:border-grey-1100 rounded-sm h-11.5 w-full text-white-1100 placeholder:text-white-1100 text-base leading-[140%] font-normal active:bg-white/10 focus:bg-white/10"
            />
          </div>

          <div>
            <label className="text-white-1100 text-sm leading-[124%] font-normal block mb-2">Telefonnummer</label>
            <input
              type="text"
              name="phone"
              placeholder=""
              value={form.phone}
              onChange={handleChange}
              className="input-style bg-black-1200/40 hover:bg-white/2 px-4 border border-solid border-white/50 hover:border-grey-1100 rounded-sm h-11.5 w-full text-white-1100 placeholder:text-white-1100 text-base leading-[140%] font-normal active:bg-white/10 focus:bg-white/10"
            />
          </div>

          <div>
            <label className="text-white-1100 text-sm leading-[124%] font-normal block mb-2">E-Mail Adresse</label>
            <input
              type="email"
              name="email"
              placeholder=""
              value={form.email}
              onChange={handleChange}
              className="input-style bg-black-1200/40 hover:bg-white/2 px-4 border border-solid border-white/50 hover:border-grey-1100 rounded-sm h-11.5 w-full text-white-1100 placeholder:text-white-1100 text-base leading-[140%] font-normal active:bg-white/10 focus:bg-white/10"
            />
          </div>

          <div>
            <label className="text-white-1100 text-sm leading-[124%] font-normal block mb-2">Website-URL</label>
            <input
              type="text"
              name="website"
              placeholder=""
              value={form.website}
              onChange={handleChange}
              className="input-style bg-black-1200/40 hover:bg-white/2 px-4 border border-solid border-white/50 hover:border-grey-1100 rounded-sm h-11.5 w-full text-white-1100 placeholder:text-white-1100 text-base leading-[140%] font-normal active:bg-white/10 focus:bg-white/10"
            />
          </div>

          <div>
            <label className="text-white-1100 text-sm leading-[124%] font-normal block mb-2">
              Gibt es spezielle Fragen oder Anliegen?
            </label>
            <input
              type="text"
              name="questions"
              placeholder=""
              value={form.questions}
              onChange={handleChange}
              className="input-style bg-black-1200/40 hover:bg-white/2 px-4 border border-solid border-white/50 hover:border-grey-1100 rounded-sm h-11.5 w-full text-white-1100 placeholder:text-white-1100 text-base leading-[140%] font-normal active:bg-white/10 focus:bg-white/10"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-orange-1100 hover:bg-white-1100 text-white-1100 cursor-pointer transition px-5 h-11.5 lg:w-auto w-full rounded-sm font-normal text-base leading-[140%]">
            Jetzt anfragen
          </button>
        </div>
      </form>
    </div>
  );
}