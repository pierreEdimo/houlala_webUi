import {useRecoilState} from "recoil";
import {ProductListState} from "../atoms/product.list.state";
import {useEffect} from "react";
import {ProductState} from "../atoms/product.state";
import {json} from "stream/consumers";

function useProductList(url: string) {
    const [productList, setProductList] = useRecoilState(ProductListState);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setProductList(json));
    }, [setProductList, url]);

    return productList;
}

function useProduct(url: string) {
    const [product, setProduct] = useRecoilState(ProductState);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setProduct(json))
    }, [setProduct, url]);

    return product;
}

