interface CloseIconButtonProps {
  backButton?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CloseIconButton({ backButton }: CloseIconButtonProps) {
  return (
    <button onClick={backButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3.4L14.6 2L9 7.6L3.4 2L2 3.4L7.6 9L2 14.6L3.4 16L9 10.4L14.6 16L16 14.6L10.4 9L16 3.4Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
