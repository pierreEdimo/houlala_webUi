import {NextPage} from "next";
import {useRouter} from "next/router";

const StoreCategory: NextPage = () => {
    const router = useRouter();
    const {sid} = router.query;

    return (
        <>
            <div>
                {sid}
            </div>
        </>
    )
}

export default StoreCategory;