export interface FilterButton {
  type: Filter;
  label: string;
  isActice: boolean;
}

export enum Filter {
  All,
  Actice,
  Completed
}
