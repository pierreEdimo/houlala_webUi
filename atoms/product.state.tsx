import {atom} from "recoil";
import {Product} from "../types/product";

export const ProductState = atom({
    key: "product",
    default: {} as Product
})