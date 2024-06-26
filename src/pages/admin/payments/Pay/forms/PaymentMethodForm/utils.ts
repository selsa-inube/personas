import { IProduct } from "src/model/entity/product";
import { extractAttribute } from "src/utils/products";
import { EMoneySourceType, IMoneySource } from "./types";

const mapMoneySources = (savings: IProduct[]): IMoneySource => {
  return savings.reduce((acc, saving) => {
    const netValue = extractAttribute(saving.attributes, "net_value");

    acc[saving.id] = {
      id: saving.id,
      label: saving.title,
      value: 0,
      balance: !isNaN(Number(netValue?.value)) ? Number(netValue?.value) : 0,
      type: EMoneySourceType.SAVINGACCOUNT,
    };
    return acc;
  }, {} as IMoneySource);
};

export { mapMoneySources };
