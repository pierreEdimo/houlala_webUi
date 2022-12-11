import {atom} from "recoil";
import {Category} from "../types/category";


export const CategoryListState = atom({

    key: 'categoryList',
    default: [] as Category[]
})