import { UiFooter } from "@/shared/ui/ui-footer";
import { UiHeader } from "@/shared/ui/ui-header";
import Image from "next/image";
import banner1 from "../../public/banner1.png";
import banner2 from "../../public/banner1.png";
import { UiMainPageLayout } from "@/shared/ui/layouts/ui-main-page-layout";

const posts = [
  {
    img: banner1,
    title: "What Traveling Greece For 2 Weeks Taught Me About Life",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
  },
  {
    img: banner1,
    title: "Why You Should Never Order 12 Chicken Nuggets and Fries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras. Ligula a varius tempus ac amet, vel lectus sed. Urna sit Eget.",
  },
];

export function Sections() {
  return (
    <>
      <section>
        <ul>
          {posts.map((item, index) => (
            <li>
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
              <h3>{item.title}</h3>
              <h4>{item.description}</h4>
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
