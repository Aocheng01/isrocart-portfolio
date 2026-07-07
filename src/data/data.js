export const siteInfo = {
  name: "Isabel Rodríguez Caro",
  role: "Concept Artist & Illustrator",
  email: "isrocart@gmail.com",
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/about.jpg",
  aboutText: "Escribe aquí el texto que describe lo que haces.",
  social: [
    { name: "email", url: "mailto:isrocart@gmail.com" },
    { name: "instagram", url: "https://instagram.com/isrocart" },
    { name: "therookies", url: "https://www.therookies.co/u/Isroca" },
  ],
};

export const categories = [
  {
    slug: "concept-art",
    title: "Concept Art",
    cover: "/images/concept-art/concept-art-cover.jpg",
    sections: [
      {
        title: "Proyecto 1",
        slug: "Proyecto 1",
        cover: "/images/concept-art/Proyecto 1/cover.jpg",
        groups: [
          {
            title: "Characters & Key Art",
            images: [
              "/images/concept-art/Proyecto 1/characters-1.jpg",
              "/images/concept-art/Proyecto 1/characters-2.jpg",
            ],
          },
          {
            title: "Props",
            images: [
              "/images/concept-art/Proyecto 1/props-1.jpg",
              "/images/concept-art/Proyecto 1/props-2.jpg",
            ],
          },
          {
            title: "Signage",
            images: [
              "/images/concept-art/Proyecto 1/signage-1.jpg",
              "/images/concept-art/Proyecto 1/signage-2.jpg",
            ],
          },
        ],
      }
    ],
  },
  {
    slug: "illustration",
    title: "Illustration",
    cover: "/images/illustration/illustration-cover.jpg",
    sections: [],
    gallery: [
      "/images/illustration/img-1.jpg",
      "/images/illustration/img-2.jpg",
      "/images/illustration/img-3.jpg",
      "/images/illustration/img-4.jpg",
    ],
  },
  {
    slug: "3D",
    title: "3D",
    cover: "/images/3D/3D-cover.jpg",
    sections: [],
    gallery: [
      "/images/3D/img-1.jpg",
      "/images/3D/img-2.jpg",
    ],
  }
];
