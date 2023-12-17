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
  boxShadow?: string;
  disableRipple?: boolean;
  caption?: string;
  alignItems?: "center" | "start" | "end";
  border?: string;
  height?: string;
  padding?: string;
  children?: React.ReactNode;
  borderRadius?: string;
  justifyContent?: string;
  handleOnClick?: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
