const ServiceCard = ({ number, title, description, link, href }) => {
  return (
    <article className="flex min-h-[290px] flex-col bg-paper p-[33px]">
      <span className="font-extrabold text-orange">{number}</span>

      <h3 className="mt-8 font-serif text-[32px]">{title}</h3>

      <p className="text-[15px] leading-[1.6] text-[#4c4841]">
        {description}
      </p>

      <a
        href={href}
        className="mt-auto w-max border-b border-ink pb-[5px] font-extrabold"
      >
        {link}
      </a>
    </article>
  );
};

export default ServiceCard;