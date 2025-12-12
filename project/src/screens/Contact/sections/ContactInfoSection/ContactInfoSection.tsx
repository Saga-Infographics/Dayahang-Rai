import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const formFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Your Full Name",
    type: "input",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "your.email@example.com",
    type: "input",
  },
  {
    id: "subject",
    label: "Subject",
    placeholder: "Inquiry about...",
    type: "input",
  },
  {
    id: "message",
    label: "Message",
    placeholder: "Type your detailed message here.",
    type: "textarea",
  },
];

export const ContactInfoSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-white rounded-[10px] border border-solid border-[#e0d7c7] shadow-[0px_0px_1px_#1a1a1a0d,0px_0px_2px_#1a1a1a14]">
      <CardContent className="flex flex-col p-4 sm:p-6 md:p-8">
        <h2 className="[font-family:'DM_Serif_Display',Helvetica] font-semibold text-[#2B2B2B] text-xl sm:text-2xl md:text-3xl tracking-[0] leading-7 sm:leading-8 md:leading-9 mb-6 sm:mb-8 md:mb-10">
          Send a Booking Inquiry
        </h2>

        <form action="https://formspree.io/f/xvgvqljy" method="POST" className="flex flex-col gap-[18px]">
          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-[9px]">
              <Label
                htmlFor={field.id}
                className="[font-family:'Manrope',Helvetica] font-normal text-[#4A4A4A] text-xs tracking-[0] leading-5"
              >
                {field.label}
              </Label>
              {field.type === "input" ? (
                <Input
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  className="bg-white rounded-xl border border-solid border-[#e0d7c7] [font-family:'Manrope',Helvetica] font-normal text-[#6F6F6F] text-sm tracking-[0] leading-[22px] h-11 px-4 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-250"
                />
              ) : (
                <div className="relative">
                  <Textarea
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    className="bg-white rounded-xl border border-solid border-[#e0d7c7] [font-family:'Manrope',Helvetica] font-normal text-[#6F6F6F] text-sm tracking-[0] leading-[22px] h-32 px-4 pt-3 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-250"
                  />
                  <img
                    className="absolute right-1 bottom-1 w-3 h-3"
                    alt="Resizing handle"
                    src="/resizing-handle.svg"
                  />
                </div>
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full bg-[#111111] hover:bg-[#1A1A1A] border-0 h-11 rounded-xl [font-family:'Manrope',Helvetica] font-semibold text-[#EDEDED] text-sm text-center tracking-[0] leading-[22px] mt-2 shadow-lg hover:shadow-xl transition-all duration-250 hover:-translate-y-0.5"
          >
            Send Inquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
