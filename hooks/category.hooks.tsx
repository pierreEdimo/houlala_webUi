import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {CategoryListState} from "../atoms/category.list.state";

function useCategoryList(url: string) {
    const [categoryList, setCategoryList] = useRecoilState(CategoryListState);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setCategoryList(json));
    }, [setCategoryList, url]);

    return categoryList;
}