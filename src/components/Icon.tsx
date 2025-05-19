export const Icon = ({
  id,
  size,
  width,
  height,
  ...props
}: {
  id: string;
  size?: number;
  width?: number;
  height?: number;
  props?: object;
  className?: string;
}) => {
  return (
    <svg
      {...props}
      width={size ? size : width}
      height={size ? size : height}
      className={props.className}
    >
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};