import { IProduct } from "src/model/entity/product";

interface IOption {
  id: string;
  disabled?: boolean;
  value: string;
  title: string;
}

interface ISelectedProductState {
  credit: IProduct;
  option: IOption;
}

export type { ISelectedProductState };
