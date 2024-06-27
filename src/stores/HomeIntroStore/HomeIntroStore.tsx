type IconName = "behance" | "dribble" | "twitter" | "facebook";

type NavLinks = {
  id: number;
  to: string;
  title: string;
  icon: IconName;
};

type HomeIntro = {
  navLinks: NavLinks[];
  aboutInfo: string;
  aboutTitle: string;
  aboutDesc: string;
};

export const homeIntroStore: HomeIntro = {
  navLinks: [
    { id: 1, to: "/", title: "Behance", icon: "behance" },
    { id: 2, to: "/", title: "Dribble", icon: "dribble" },
    { id: 3, to: "/", title: "Twitter", icon: "twitter" },
    { id: 4, to: "/", title: "Facebook", icon: "facebook" },
  ],
  aboutInfo: "About Company",
  aboutTitle: " Our Main Goal to Satisficed Local & Global Clients",
  aboutDesc:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaque quae abillo inventore veritatisey et quasi architecto beatae vitae dictasunt explicabo voluptatem.",
};
