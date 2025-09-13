import { UiMainPageLayout } from "@/shared/ui/layouts/ui-main-page-layout";
import { UiFooter } from "@/shared/ui/ui-footer";
import { UiHeader } from "@/shared/ui/ui-header";
import banner from "../../public/PostThumbnail.png";
import Image from "next/image";

export function Sections() {
  return (
    <>
      <section className="">
        <h1 className="p-[10px]">What I Learned About Life and Food Backpacking Around Greece</h1>
        <Image
           className="p-[-10px]"
          src={banner}
          alt="Banner"
          layout="responsive" // Сохраняем соотношение сторон
          objectFit="cover" // Заполняем доступным пространством, обрезая лишнее
          priority // Подгружаем картинку сразу же
          placeholder="blur" // Предварительная размазанная версия пока загружается оригинал
        
        />
      </section>
      <section  className="p-[10px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui
          diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare
          nulla risus id fames nascetur urna. Eros in neque tincidunt.
        </p>
      </section>
      <section  className="p-[10px]">
        <p>
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
      </section>
      <section  className="p-[10px]">
        <h3>In this article</h3>
        <ul>
          <li>1. How to travel without spending a dime</li>
          <li>2. Get the most out of your credit card reward points</li>
          <li>3. Why you don’t need more than 3 pieces of clothing</li>
        </ul>
      </section>

      <section  className="p-[10px]">
        <p>
          Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut
          erat in. Et nulla a magna amet, amet. Sodales malesuada laoreet
          bibendum neque amet turpis non. Ac arcu lacus turpis elementum
          imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum
          urna, nunc.
        </p>
      </section>

      <section  className="p-[10px]">
        <h2>
          How to travel without spending a dimeHow to travel without spending a
          dime
        </h2>

        <p>
          Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate
          donec enim sed ornare scelerisque. Sollicitudin orci leo egestas
          fermentum platea a imperdiet nisl. Velit placerat nibh nisl ut
          feugiat. Egestas id egestas nunc mattis. Sed mauris vitae commodo
          pharetra, vestibulum rhoncus natoque.
        </p>

        <p>
          Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam mauris
          etiam nibh maecenas nibh interdum mauris suspendisse. Volutpat, enim
          interdum facilisi mauris vitae id. Vel malesuada sit etiam dolor.
          Ullamcorper habitant vitae, nec pretium ullamcorper viverra integer
          praesent tincidunt. At erat sagittis tellus ultricies in a.{" "}
        </p>
      </section>
    </>
  );
}

export function HomePage() {
  return (
    <UiMainPageLayout
      header={<UiHeader />}
      sections={<Sections />}
      footer={<UiFooter />}
    />
  );
}
