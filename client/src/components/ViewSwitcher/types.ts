export type Props = {
  readonly switchView: (id: number) => number;
  readonly viewTypeId: string;
};

export interface ViewType {
  viewTypeId: number;
}
