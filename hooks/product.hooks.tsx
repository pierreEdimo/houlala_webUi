import {useRecoilState} from "recoil";
import {ProductListState} from "../atoms/product.list.state";
import {useEffect} from "react";

export function useProductList(url: string) {
    const [productList, setProductList] = useRecoilState(ProductListState);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setProductList(json));
    }, [setProductList, url]);

    return productList;
}