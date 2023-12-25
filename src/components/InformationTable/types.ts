import { City } from "@store/features/cities/types";
import { Hotel } from "@store/features/hotels/types";

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headcells: HeadCell[];
}

export type Order = "asc" | "desc";

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export interface Data {
  id: number;
  name: string;
  description: string;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
  title: string;
  handleRowActions?: (event: React.MouseEvent<HTMLElement>) => void;
  handleRemoveSelection?: () => void;
}

export interface InformationTableProps {
  headcells: HeadCell[];
  title: string;
  rows: City[] | Hotel[] | undefined;
  loading?: boolean;
  handleDeleteRow?: (id: number) => void;
  handleUpdateRow?: (id: number) => void;
}
