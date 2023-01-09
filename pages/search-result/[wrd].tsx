import {NextPage} from "next";
import {NestedLayout} from "../../components/nested.layout";
import BackButton from "../../components/back.button";
import {useRouter} from "next/router";
import SearchProducts from "../../components/search.products";

const SearchResult: NextPage = () => {
    const router = useRouter();
    const {wrd} = router.query;
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

    return (
        <>
            <NestedLayout>
                <BackButton title={"Resultats"}/>
                <div style={{height: "10px"}}></div>
                <p>Resultats et suggestions pour la recherche <b>{wrd}</b></p>
                <SearchProducts url={`${PRODUCT_URL}/search?searchWord=${wrd}`}/>
            </NestedLayout>
        </>
    )
}

export default SearchResult; 