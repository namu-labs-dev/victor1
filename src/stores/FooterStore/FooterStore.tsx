type IconName = "behance" | "dribble" | "facebook" | "twitter";

type SocialIcon = {
  id: number;
  title: string;
  icon: IconName;
};

type QuickLinks = {
  id: number;
  title: string;
  url: string;
};

type BottomLinks = {
  id: number;
  title: string;
  url: string;
};

type FooterStore = {
  email: string;
  phone: string;
  socialIcons: SocialIcon[];
  quickLinks: QuickLinks[];
  bottomLinks: BottomLinks[];
};

export const footerStore: FooterStore = {
  email: "support@gmail.com",
  phone: "+000 (123) 456 88",
  socialIcons: [
    { id: 1, title: "Facebook", icon: "facebook" },
    { id: 2, title: "Twitter", icon: "twitter" },
    { id: 1, title: "Dribble", icon: "dribble" },
    { id: 1, title: "Behance", icon: "behance" },
  ],
  quickLinks: [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Popular Services", url: "/" },
    { id: 3, title: "Team Member", url: "/" },
    { id: 4, title: "Latest News", url: "/" },
    { id: 5, title: "Contact Us?", url: "/" },
    { id: 6, title: "UI/UX Design", url: "/" },
    { id: 7, title: "Development", url: "/" },
    { id: 8, title: "Marketing", url: "/" },
    { id: 9, title: "Need a Career", url: "/" },
    { id: 10, title: "Faqs ?", url: "/" },
  ],
  bottomLinks: [
    { id: 1, title: "About", url: "/" },
    { id: 2, title: "Services", url: "/" },
    { id: 3, title: "FAQs", url: "/" },
    { id: 4, title: "How IT Works", url: "/" },
  ],
};
