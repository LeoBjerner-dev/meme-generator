export interface Imemes {
  img: string;
  alt: string;
  topText: string;
  bottomText: string;
  onTopChange: (val: string) => void;
  onBottomChange: (val: string) => void;
}