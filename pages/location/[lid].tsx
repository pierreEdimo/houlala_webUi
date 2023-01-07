import {NextPage} from "next";
import {NestedLayout} from "../../components/nested.layout";
import BackButton from "../../components/back.button";
import {useRouter} from "next/router";

const Location: NextPage = () => {
    const router = useRouter();
    const {lid} = router.query;

    return (
        <>
            <NestedLayout>
                <BackButton title={"Location"}/>
                <p>{lid}</p>
            </NestedLayout>
        </>
    )
}

export default Location;