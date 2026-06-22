import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Excavation Contractor Insurance",
  agency: "Contractors Choice Agency",
  url: "https://excavationcontractorinsurance.com",
  phone: "844-967-5247",
  phoneRaw: "8449675247",
  email: "josh@contractorschoiceagency.com",
  address: "12220 E Riggs Rd, Chandler, AZ 85249",
  npn: "8608479",
};
