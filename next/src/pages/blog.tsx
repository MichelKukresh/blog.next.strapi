import { UiFooter } from "@/shared/ui/ui-footer";
import { UiHeader } from "@/shared/ui/ui-header";
import Image from "next/image";
import banner1 from "../../public/banner1.png";
import banner2 from "../../public/banner1.png";
import owner from "../../public/owner.png";

import { UiMainPageLayout } from "@/shared/ui/layouts/ui-main-page-layout";

const posts = [
  {
    img: banner1,
    title: "What Traveling Greece For 2 Weeks Taught Me About Life",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",

    date: "14.19.2025",
    read: 1,
    owner: {
      image: owner,
      name: "George Costanza",
    },
    category: { name: "Travel", url: "/travel" },
    tag: [
      { name: "Red", url: "/red" },
      { name: "Green", url: "/green" },
    ],
  },
  {
    img: banner1,
    title: "Why You Should Never Order 12 Chicken Nuggets and Fries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras. Ligula a varius tempus ac amet, vel lectus sed. Urna sit Eget.",
    date: "14.19.2025",
    read: 1,
    owner: {
      image: owner,
      name: "George Costanza",
    },
    category: { name: "Travel", url: "/travel" },
    tag: [
      { name: "Red", url: "/red" },
      { name: "Green", url: "/green" },
    ],
  },
  {
    img: banner1,
    title: "What Traveling Greece For 2 Weeks Taught Me About Life",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
    date: "14.19.2025",
    read: 1,
    owner: {
      image: owner,
      name: "George Costanza",
    },
    category: { name: "Travel", url: "/travel" },
    tag: [
      { name: "Red", url: "/red" },
      { name: "Green", url: "/green" },
    ],
  },
  {
    img: banner1,
    title: "Why You Should Never Order 12 Chicken Nuggets and Fries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras. Ligula a varius tempus ac amet, vel lectus sed. Urna sit Eget.",
    date: "14.19.2025",
    read: 1,
    owner: {
      image: owner,
      name: "George Costanza",
    },
    category: { name: "Travel", url: "/travel" },
    tag: [
      { name: "Red", url: "/red" },
      { name: "Green", url: "/green" },
    ],
  },
];

export function Sections() {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center text-center">
        <h1 className="text-navy-blue text-3xl font-extrabold">
          The Food Ninja Blog
        </h1>

        <p>A blog about food, experiences, and recipes.</p>
        <input className="" placeholder="Search for articles" />
      </section>
      <section className="">
        <ul className="grid grid-cols-2 gap-2">
          {posts.map((item, index) => (
            <li className="flex flex-col gap-2">
              <a href="">
                <Image
                  src={item.img}
                  alt="Banner"
                  layout="responsive"
                  objectFit="cover"
                  priority
                  placeholder="blur"
                />
              </a>
              <a
                className="text-white bg-navy-blue rounded-xl p-2"
                href={item.category.url}
              >
                {item.category.name}
              </a>

              <div>
                <span>{item.date}</span>,<span>{item.read}</span> минут
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <h4>{item.description}</h4>
              <div className="flex flex-row gap-2">
                <Image
                  src={item.owner.image}
                  alt="Banner"
                  priority
                  placeholder="blur"
                  height={42}
                  width={42}
                />{" "}
                <span>{item.owner.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section>Пагинация</section>
      <section>Форма + контакты</section>
    </>
  );
}

export function BlogPage() {
  return (
    <UiMainPageLayout
      header={<UiHeader />}
      sections={<Sections />}
      footer={<UiFooter />}
    />
  );
}
