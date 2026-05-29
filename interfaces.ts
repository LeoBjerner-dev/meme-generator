export interface Imemes {
  img: string;
  alt: string;
  topText: string;
  bottomText: string;
  topSize: number;
  bottomSize: number;
  onTopChange: (val: string) => void;
  onBottomChange: (val: string) => void;
  onTopSizeChange: (val: number) => void;
  onBottomSizeChange: (val: number) => void;
}
