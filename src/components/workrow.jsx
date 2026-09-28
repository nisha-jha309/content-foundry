const WorkRow = ({ number, title, description, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="grid grid-cols-[45px_1fr_20px_20px] items-center gap-5 border-b border-line py-7 transition-opacity  hover:opacity-60 md:grid-cols-[80px_1fr_1fr_30px] "  >
      <small className="font-black text-orange">{number}</small>
      <b className="font-serif text-[23px] md:text-[28px]">{title}</b>
      <span className="col-start-2 text-[#655f57] md:col-start-auto">{description}</span>
      <b className=" col-start-3 text-2xl text-right font-extraBold">↗</b>
    </a>
  );
};

export default WorkRow;