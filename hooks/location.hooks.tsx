import {useRecoilState} from "recoil";
import {LocationListState} from "../atoms/location.list.state";
import {useEffect} from "react";

export function useLocationList(url: string) {
    const [locationList, setLocationList] = useRecoilState(LocationListState);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setLocationList(json));
    }, [setLocationList, url]);

    return locationList;
}