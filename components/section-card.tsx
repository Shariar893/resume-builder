type SectionCardProps = {
  primaryHeading: string;
  secondaryHeading: string;
};

const SectionCard = ({
  primaryHeading,
  secondaryHeading,
}: SectionCardProps) => {
  return (
    <div className=" relative pl-14 pr-8 h-[5rem] gap-4 rounded-[2px] border bg-card text-card-foreground shadow-sm flex ">
      <div className="border-r">
        <div className="absolute grid grid-cols-2 place-items-center place-content-center gap-y-1 py-1 w-7 bg-secondary top-1/2 -translate-y-1/2 rounded left-4 cursor-grab">
          <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
          <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
          <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
          <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
        </div>
      </div>

      <div className="self-center space-y-[2.5px]">
        <h2 className="text-2xl text-primary/80 font-semibold leading-none tracking-tight">
          {primaryHeading}
        </h2>
        <p className="text-primary/50">{secondaryHeading}</p>
      </div>
    </div>
  );
};

export default SectionCard;
