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
              <Image
                src={serviceData?.img ?? ""}
                alt={serviceData?.title ?? "service image"}
                width={600} // required
                height={400} // required
                className="w-full h-auto"
                priority
              />

              <h1 className="sm:text-5xl text-4xl font-bold text-white">
                {serviceData?.title}
              </h1>
              <ul className="w-full">
                {serviceData?.details.map((itm, index) => (
                  <li
                    key={index}
                    className="text-lg w-full font-normal text-white py-3">
                    {itm}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="w-full">
              <li className="text-lg w-full font-normal text-white py-3">
                <p className="text-lg w-full font-normal text-white py-3">
                  {serviceData?.servicesDetails.map((itm, idx) => (
                    <div key={idx} className="space-y-5">
                      <h1 className="text-4xl font-semibold text-white">
                        {itm.title}
                      </h1>
                      <p className="text-lg text-white">{itm?.description}</p>
                      <div className="w-full flex">
                        <div className="space-y-5">
                          <ul className="list-disc list-inside">
                            {itm.points.map((it, id) => (
                              <li key={id} className="text-lg text-white">
                                {it}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </p>
              </li>
            </ul>
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
