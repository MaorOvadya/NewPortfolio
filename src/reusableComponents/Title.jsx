export default function Title({ title, number = "" }) {
  return (
    <div className="capitalize text-left px-10 md:px-20 py-10 tracking-wides bg-[#222222] text-white ">
      <p className="">
        <span className="text-xs md:text-sm lg:text-base ">{number}</span>
        <span className="text-lg md:text-xl lg:text-4xl ">{title}</span>
      </p>
    </div>
  );
}
