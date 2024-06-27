export const headerStore = {
  links: [
    {
      id: 1,
      title: "Home",
      url: "/home",
      dropdown: [
        { id: 1, title: "MultiPage", url: "/" },
        { id: 2, title: "OnePage", url: "/" },
      ],
    },
    { id: 2, title: "About Us", url: "/about", dropdown: [] },
    {
      id: 3,
      title: "Pages",
      url: "/",
      dropdown: [
        { id: 1, title: "FAQs", url: "/" },
        { id: 2, title: "Products", url: "/" },
        { id: 3, title: "Team", url: "/" },
        { id: 4, title: "Contact Us", url: "/contact" },
        { id: 5, title: "Pricing Plan", url: "/" },
        { id: 6, title: "404 Error", url: "/" },
      ],
    },
    {
      id: 4,
      title: "Services",
      url: "/",
      dropdown: [
        { id: 1, title: "Our Services", url: "/" },
        { id: 2, title: "Service Detail One", url: "/" },
        { id: 3, title: "Service Detail Two", url: "/" },
      ],
    },
    {
      id: 5,
      title: "Projects",
      url: "/",
      dropdown: [
        { id: 1, title: "Project Grid", url: "/" },
        { id: 2, title: "Project List", url: "/" },
        { id: 3, title: "Project Detail", url: "/" },
      ],
    },
    {
      id: 6,
      title: "Blog",
      url: "/",
      dropdown: [
        { id: 1, title: "Blog Grid", url: "/" },
        { id: 2, title: "Blog Standard", url: "/" },
        { id: 3, title: "Blog Detail", url: "/" },
      ],
    },
  ],
};
