export type THeaderProps = {
  withArrowLeft?: boolean;
  withSearchBar?: boolean;
  onPressBack?: () => void;
  onChange?: (value: string) => void;
  searchValue?: string;
};
