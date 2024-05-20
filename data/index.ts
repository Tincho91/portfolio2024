export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently searching for a long-term work",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Luna Net",
    des: "Crafted with HTML, SASS, and Bootstrap, this company website is the epitome of efficiency and simplicity. It boasts a clean, user-friendly interface complemented by a well-structured navigation system. Its responsive design ensures an optimal viewing experience across a range of devices.",
    img: "/lunaNet.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.lunanet.com.ar/",
  },
  {
    id: 2,
    title: "Dali - Thermoplastics",
    des: "Web application built with Next.js, featuring a range of dependencies including Chakra UI for styling, Framer Motion for animations, and react-scroll for scroll functionalities. It also uses react-slick and slick-carousel for carousel features.",
    img: "/daliTermoplasticos.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://dalitermoplasticos.com/",
  },
  {
    id: 3,
    title: "Principe Portofino",
    des: "Beautifully designed static site with a clean, intuitive interface. It features visually appealing sections that are well-organized, ensuring a smooth browsing experience. The site showcases an elegant aesthetic with a focus on user-friendly navigation and clear presentation of content.",
    img: "/principePortofino.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Giardelli - Gonzalez",
    des: "This job search website offers a comprehensive platform where users can create profiles and search for job postings uploaded by administrators. The admin panel allows for job creation, user management, and automated email notifications to both users and administrators when applications are submitted. This setup ensures a smooth and efficient experience for both job seekers and site administrators",
    img: "/giardelliGonzalez.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://giardelli-gonzalez-web.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      '"I appreciate the work done so far and look forward to our future collaborations. Your dedication and skills are commendable."',
    name: "Celina Bustamante",
    img: "https://media.licdn.com/dms/image/C4E03AQHUAsUVjH3snA/profile-displayphoto-shrink_800_800/0/1589659528808?e=1721865600&v=beta&t=Yi5D4UanoDJpQYt04YmwCXVMYHellGTVB6_we574MSY",
    title: "Content Director at MODO-COMUNICACION",
  },
  {
    quote:
    '"Thank you for your partnership and the meticulous attention you have given our project. Your focus on detail has made the process smooth and successful."',
    img: "https://media.licdn.com/dms/image/D4E03AQGLaUKer7uPBg/profile-displayphoto-shrink_800_800/0/1700166368417?e=1721865600&v=beta&t=A08l1TNUVEXVfikYnpLafiVxmniHDpL7fG_mk7r4yls",
    name: "Ignacio Rodriguez",
    title: "Founder of Masrow Studio",
  },
  {
    quote:
    '"Your communication and dedication to our ongoing website project is impressive. I appreciate your personal commitment to our needs."',
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Susana Mezzadri",
    title: "Manager at Inmobiliaria Mezzadri",
  },
  {
    quote:
    '"Thanks to his ability to develop innovative solutions and attention to detail, he transformed our job search platform into an intuitive and efficient tool, significantly enhancing the user experience as well as the experience for our employees using the admin panel."',
    img: "https://media.licdn.com/dms/image/D4D03AQFBSzirwtBP0A/profile-displayphoto-shrink_800_800/0/1697045319664?e=1721865600&v=beta&t=8d16ZD4tKRNuIqfX2tQZtcZpQx2H8YrUTdxdHZwfm38",
    name: "Darío Martín Giardelli",
    title: "Cofounder and General Director of Giardelli-Gonzalez",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    desc: "Developed responsive and dynamic web applications using Next.js and React.js, leveraging a wide range of libraries and tools to deliver engaging user experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React.js Specialist",
    desc: "Specialized in building interactive user interfaces and frontend components using React.js, ensuring seamless integration with backend services and APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web App Developer",
    desc: "Independently developed and deployed custom web applications for clients, providing end-to-end development services from conceptualization to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "UI/UX-focused Developer",
    desc: "Implemented intuitive and visually appealing user interfaces, prioritizing user experience and design principles to create engaging digital experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];