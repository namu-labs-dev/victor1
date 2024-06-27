type IconName = "facebook" | "twitter" | "instagram" | "linkedin";

type Icons = {
  id: number;
  icon: IconName;
  title: string;
};

type Locations = {
  id: number;
  country: string;
  address: string;
  email: string;
  phone: string;
};

type ContactStore = {
  contactInfo: string;
  contactTitle: string;
  locations: Locations[];
  icons: Icons[];
};

export const contactStore: ContactStore = {
  contactInfo: "Contact Us",
  contactTitle: "Ready to Work Your Next Projects",
  locations: [
    {
      id: 1,
      country: "New York",
      address: "55 One State Road, 2nd Block New York, United States",
      email: "support@gmail.com",
      phone: "+000 (123) 456 88",
    },
    {
      id: 2,
      country: "Australia",
      address: "67 One State Road, 2nd Block Melbourne, Australia",
      email: "support@gmail.com",
      phone: "+000 (123) 456 88",
    },
  ],
  icons: [
    { id: 1, icon: "facebook", title: "" },
    { id: 2, icon: "twitter", title: "" },
    { id: 3, icon: "instagram", title: "" },
    { id: 4, icon: "linkedin", title: "" },
  ],
};
