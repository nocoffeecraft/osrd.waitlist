import { Microscope, Users, BadgeDollarSign } from "lucide-react";

const features = [
  {
    title: "Own Your IP",
    description:
      "Tokenize your research, maintain full ownership, and monetize your discoveries without intermediaries.",
    icon: <Microscope size={30} className="lg:w-7 lg:h-7 xl:w-8 xl:h-8" />,
    classes: "bg-[#FB90AB]",
    image: "/features/feature1.png",
  },
  {
    title: "A Global Scientific Network",
    description:
      "Connect with top researchers, collaborate on groundbreaking projects, and drive innovation worldwide.",
    icon: <Users size={30} className="lg:w-7 lg:h-7 xl:w-8 xl:h-8" />,
    classes: "bg-[#FDA801]",
    image: "/features/feature2.png",
  },
  {
    title: "Find Grants & Support",
    description:
      "Secure funding directly from organizations, apply for research grants, and accelerate your work.",
    icon: <BadgeDollarSign size={30} className="lg:w-7 lg:h-7 xl:w-8 xl:h-8" />,
    classes: "bg-[#00B4A8]",
    image: "/features/feature3.png",
  },
];

export default features;
