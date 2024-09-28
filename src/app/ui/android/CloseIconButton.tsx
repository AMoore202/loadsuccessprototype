import { CloseMenuIcon } from "./Icons";

interface CloseIconButtonProps {
  backButton?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CloseIconButton({ backButton }: CloseIconButtonProps) {
  return (
    <button onClick={backButton}>
      <CloseMenuIcon />
    </button>
  );
}
