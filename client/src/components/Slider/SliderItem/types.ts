export type Props = {
  hasNext: boolean;
  hasPrev: boolean;
  onNext: (event: any) => void;
  onPrev: (event: any) => void;
  onCloseModal: (event: any) => void;
  imageSrc: string;
};
