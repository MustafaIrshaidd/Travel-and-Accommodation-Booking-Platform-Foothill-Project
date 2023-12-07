export interface DefaultButtonProps {
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  variant?: "text" | "outlined" | "contained";
  width?: string;
  text?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: "submit";
  loadingPosition?: "center" | "end" | "start";
  handleOnClick?: () => void;
}
