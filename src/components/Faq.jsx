import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Faq = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Who is Behind XGAMING?",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nam repudiandae blanditiis iusto aliquam ipsa repellendus molestiae commodi perspiciatis quaerat aspernatur voluptas consequatur eligendi corrupti eaque? Soluta ullam molestias quasi.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "What is XGAMING?",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, soluta magni! Vel, a nisi explicabo quae et rem animi. Accusantium quidem earum labore nostrum eveniet incidunt suscipit obcaecati, et exercitationem.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "What makes XGAMING different from other esport sites?",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta nihil maxime delectus exercitationem reprehenderit voluptates harum tempore optio ab numquam unde, eos tempora reiciendis aliquid quae voluptas hic laborum.`,
      isOpen: false,
    },
  ]);
  const toggle = (index) => {
    let updatedData = accordions.map((accord, acIndex) => {
      if (acIndex === index) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });
    setAccordion(updatedData);
  };
  return (
    <div className="mx-20 my-5" id="faq">
      <div className="border-dashed border-t border-slate-400 flex items-center justify-between flex-wrap py-5">
        <h1 className="text-3xl p-5 uppercase font-bold py-7">FAQs</h1>
        <div className="basis-full">
          {accordions.map((accord, index) => {
            return (
              <AccordionItem
                key={index}
                title={accord.title}
                desc={accord.desc}
                isOpen={accord.isOpen}
                toggleAccord={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
