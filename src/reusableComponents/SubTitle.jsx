export default function SubTitle({ title, number }) {
  return (
    <div className="capitalize text-center py-5 tracking-wides bg-[#C60F52] text-white ">
      <p>
        <span className="text-sm">{number}</span>
        <span className="text-2xl">{title}</span>
      </p>
    </div>
  );
}
