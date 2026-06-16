"use client";
import service_heror from "@/public/images/service_hero.jpeg";
import Tab from "./components/Tab";
import services from "@/public/data/service.json";
import ContactForm from "./components/contactForm";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { TServiceType } from "@/app/pageTypes/serviceType";
import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import { formatMarkdownText } from "@/lib/textHilighter";
import Link from "next/link";
import { motion } from "framer-motion";

function Service() {
  const [serviceData, setServiceData] = useState<TServiceType | null>(null);

  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    const selected = services.find((item) => item.id === id) || null;
    setServiceData(selected);
  }, [id]);

  const tabDetails = services?.map((item) => {
    return {
      id: item.id,
      title: item.title,
      link: `/service/${item.id}`,
    };
  });

  const breadcrums = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: serviceData?.title ?? "N/A",
      link: `/service/${serviceData?.id}`,
    },
  ];

  if (!serviceData) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section>
      <div className="bg-[#050709] ">
        {/* HERO SECTION */}
        <HeroSection
          title={serviceData?.title ?? "N/A"}
          image={service_heror}
          breadcrums={breadcrums}
        />
        <div className="w-full container mx-auto max-w-[1300px] flex md:flex-row flex-col justify-between gap-5 px-5">
          <div className="xl:w-6xl w-full mt-5">
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full"
              >
                <Image
                  src={serviceData?.img ?? ""}
                  alt={serviceData?.title ?? "service image"}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
              </motion.div>

              <h1 className="sm:text-5xl text-4xl font-bold text-white">
                {serviceData?.title}
              </h1>
              <ul className="w-full">
                {serviceData?.details.map((itm, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-lg w-full font-normal text-white py-3"
                    dangerouslySetInnerHTML={{
                      __html: formatMarkdownText(itm),
                    }}
                  >
                  </motion.li>
                ))}
              </ul>
            </div>
            <ul className="w-full space-y-12">
              {serviceData?.servicesDetails.map((itm: any, idx: number) => (
                <motion.li
                  key={idx}
                  className="space-y-5"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h1 className="text-2xl md:text-4xl font-semibold text-white">
                    {itm.title}
                  </h1>

                  <p
                    className="text-lg text-white leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: formatMarkdownText(itm.description),
                    }}
                  ></p>

                  {itm.points && itm.points.length > 0 && (
                    <ul className="list-disc list-inside space-y-2">
                      {itm.points.map((it: string, id: number) => (
                        <motion.li
                          key={id}
                          className="text-lg text-white leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut", delay: id * 0.1 }}
                          viewport={{ once: true }}
                          dangerouslySetInnerHTML={{
                            __html: formatMarkdownText(it),
                          }}
                        ></motion.li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>

            <div className="w-full flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <h4 className="text-lg sm:text-xl font-bold text-white py-2 sm:py-3">
                Project Link:
              </h4>
              <Link
                target="_blank"
                href={serviceData?.projectLink ?? ""}
                className="text-base sm:text-lg font-normal text-blue-400 py-2 sm:py-3 underline break-all"
              >
                Link
              </Link>
            </div>

          </div>

          <div className="md:w-1/2 w-full flex flex-col gap-5 h-full mt-5">
            <div>
              <Tab tabs={tabDetails} />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
