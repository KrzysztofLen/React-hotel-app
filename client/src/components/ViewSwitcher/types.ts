export type Props = {
  readonly switchView: (id: number) => number;
  readonly viewTypeId: number;
};

export interface ViewType {
  viewTypeId: number;
}
