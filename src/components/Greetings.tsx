export interface IGreetings {
  title: string;
  subtitle: string;
}

export const Greetings = ({
  greetings,
}: {
  greetings: { fields: IGreetings };
}) => {
  const { title, subtitle } = greetings.fields;

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-4xl lg:text-5xl">{title}</h1>
      <span className="opacity-50 text-md lg:text-xl">{subtitle}</span>
    </div>
  );
};
