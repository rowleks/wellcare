import Arrow2 from "./Arrow2";
type BtnProps = {
  content: string;
};

export default function BtnSecondary2({ content }: BtnProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <small className="group-hover:text-dark-200 text-dark-100 text-sm font-medium">
          {content}
        </small>
        <Arrow2 />
      </div>
    </>
  );
}
