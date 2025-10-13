import Image from "next/image";
export function BlogItem({ item }) {
  console.log(
    "item.category",
    "http://localhost:1337" + item.author.avatar.url
  );
  return (
    <li className="flex flex-col gap-2">
      <a href="">
        <Image
          src={item.img}
          alt="Banner"
          layout="responsive"
          objectFit="cover"
          priority
          placeholder="blur"
          blurDataURL="..."
        />
      </a>
      <a
        className="text-white bg-navy-blue rounded-xl p-2"
        href={item.category.slug}
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
          src={item.author.avatar.url}
          alt="Banner"
          priority
          placeholder="blur"
          height={42}
          width={42}
          blurDataURL="..."
        />{" "}
        <span>{item.author.name}</span>
      </div>
    </li>
  );
}
