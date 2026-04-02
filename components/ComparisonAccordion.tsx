"use client";

import { useState } from "react";

type Row = {
  title: string;
  seo: { text: string; positive: boolean };
  ads: { text: string; positive: boolean };
};

type Section = {
  title: string;
  rows: Row[];
};

interface Props {
  sections: Section[];
}

export default function ComparisonAccordion({ sections }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {sections.map((section, index) => (
        <div key={index} className="mb-8 last-of-type:mb-0">

          {/* HEADER */}
          <button
            onClick={() => toggle(index)}
            className="bg-black-1200 cursor-pointer border-[0.2px] border-solid border-white w-full text-white-1100 flex items-center justify-between rounded-2xl p-6 text-left text-2xl font-semibold leading-[140%]"
          >
            <span>{section.title}</span>

            <span
              className={`transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.428 9.428L1.88533 16.9707L0 15.0853L6.6 8.48533L0 1.88533L1.88533 0L9.428 7.54267C9.67796 7.7927 9.81838 8.13178 9.81838 8.48533C9.81838 8.83888 9.67796 9.17796 9.428 9.428Z" fill="#FDFDFD" />
              </svg>
            </span>
          </button>

          {/* CONTENT */}
          <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-250" : "max-h-0"
              }`}
          >
            <div className="pb-4">
              <table className="w-full border-collapse">

                {/* HEAD */}
                <thead>
                  <tr className="text-orange-1100  text-base font-bold leading-[140%]">
                    <th className="text-left py-8">Kriterium</th>
                    <th className="text-left py-8">SEO</th>
                    <th className="text-left py-8">Google Ads</th>
                  </tr>
                </thead>

                {/* BODY */}
                <tbody>
                  {section.rows.map((row, i) => (
                    <tr key={i} className="border-t border-white-1100 text-white-1100  text-sm font-normal leading-[124%]">

                      {/* TITLE */}
                      <td className="py-8 align-top text-base font-bold leading-[140%]">
                        {row.title}
                      </td>

                      {/* SEO */}
                      <td className="py-8 align-top">
                        <div className="flex gap-2">
                          <span
                            className={`font-bold ${row.seo.positive
                                ? "text-orange-1100"
                                : "text-red123"
                              }`}
                          >
                            {row.seo.positive ? "✔" : "✖"}
                          </span>
                          <span>{row.seo.text}</span>
                        </div>
                      </td>

                      {/* ADS */}
                      <td className="py-8 align-top">
                        <div className="flex gap-2">
                          <span
                            className={`font-bold ${row.ads.positive
                                ? "text-orange-1100"
                                : "text-red123"
                              }`}
                          >
                            {row.ads.positive ? "✔" : "✖"}
                          </span>
                          <span>{row.ads.text}</span>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}