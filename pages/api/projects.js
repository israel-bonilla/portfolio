export default function handler(req, res) {
  res.status(200).json({
    projects: [
      {
        id: 101,
        title: "Louphira",
        gallery: [
          "http://links.israelb.xyz/louphira-store/home-img/4.webp",
          "http://links.israelb.xyz/louphira-store/home-img/5.webp",
          "http://links.israelb.xyz/louphira-store/home-img/3.webp",
          "http://links.israelb.xyz/louphira-store/home-img/6.webp",
        ],
        link: "https://louphira.vercel.app/",
        source: "https://github.com/israel-bonilla/Louphira-Shop-Demo",
        description: "Home decoration and design ecommerce store, with Stripe checkout.",
        techsUsed: ["Next.js", "React", "Sass", "Stripe API"],
        features: ["Stripe Checkout", "Shopping cart functionality"],
      },
      {
        id: 102,
        title: "Kajebu",
        gallery: ["http://links.israelb.xyz/portfolio/project-gallery-items/kajebu/1.png"],
        link: "https://kajebu.vercel.app/",
        source: "https://github.com/israel-bonilla/kajebu",
        description: "Clone of Kajabi dashboard, an online knowledge business platform.",
        techsUsed: ["Next.js", "React", "Sass"],
        features: ["User friendly UI/UX", "Modularized business tools and resources", "Products, pipelines, landing pages, marketing, CRM, and more all-in-one platform."],
      },
      // {
      //   title: "",
      //   gallery: [],
      //   link: "",
      //   source: "",
      //   description: "",
      //   techsUsed: [],
      //   features: [],
      // },
    ],
  })
}