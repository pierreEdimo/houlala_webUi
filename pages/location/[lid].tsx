import {NextPage} from "next";
import {NestedLayout} from "../../components/nested.layout";
import BackButton from "../../components/back.button";
import {useRouter} from "next/router";
import {useLocation} from "../../swrHooks/location.hooks";
import Spinner from "../../components/spinner";

const Location: NextPage = () => {
    const router = useRouter();
    const {lid} = router.query;
    const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
    const {location, isLoading, isError} = useLocation(`${LOCATION_URL}/${lid}`);

    if (isLoading) return (
        <>
            <Spinner/>
        </>
    )

    if (isError) return (
        <div>
            ....Error
        </div>
    )

    return (
        <>
            <NestedLayout>
                <BackButton title={`${location?.name}`}/>
            </NestedLayout>
        </>
    )
}

export default Location;