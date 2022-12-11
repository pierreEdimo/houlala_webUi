import {atom} from "recoil";
import {Product} from "../types/product";

export const ProductListState = atom({
    key: "productList",
    default: [] as Product[]
})