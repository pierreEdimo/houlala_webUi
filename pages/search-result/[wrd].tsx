import {NextPage} from "next";
import {NestedLayout} from "../../components/nested.layout";
import BackButton from "../../components/back.button";
import {useRouter} from "next/router";

const SearchResult: NextPage = () => {
    const router = useRouter();
    const {wrd} = router.query;

    return (
        <>
            <NestedLayout>
                <BackButton title={"Resultats"}/>
                <div style={{height: "10px"}}></div>
                <p>Resultats et suggestions pour la recherche <b>{wrd}</b></p>
            </NestedLayout>
        </>
    )
}

export default SearchResult; 