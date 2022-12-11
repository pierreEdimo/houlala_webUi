import {atom} from "recoil";
import {Location} from "../types/location";


export const LocationListState = atom({
    key: 'locationList',
    default: [] as Location[]
})