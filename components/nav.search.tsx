import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/router";
import React, {useCallback, useEffect} from "react";
import {useRecoilState} from "recoil";
import {PreviewState} from "../atoms/preview.state";
import styles from "../styles/app.bar.module.scss";
import {SearchForm} from "../types/search.form";
import SearchFormState from "../atoms/search.atoms";

type NavSearchProps = {}

const NavSearch: React.FC<NavSearchProps> = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useRecoilState(PreviewState);
    const [formData, setFormData] = useRecoilState(SearchFormState);

    const showPreview = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
        event.stopPropagation();
        if (!isOpen) {
            document.getElementById("searchComponent")!.style.display = "block";
            setIsOpen(true);
        }
    }, [isOpen, setIsOpen]);


    useEffect(() => {
        window.onclick = () => {
            if (isOpen) {
                document.getElementById("searchComponent")!.style.display = "none";
                setIsOpen(false);
            }
        };
    })

    const handleSummit = (event: any) => {
        event.preventDefault();
        const data: SearchForm = {
            word: event.target.word.value
        }
        router.push(`/search-result/${data.word}`).then();
    }

    return (
        <>
            <div className={styles.searchContainer}>
                <form onSubmit={handleSummit}>
                    <input name={"word"}
                           required
                           value={formData.word}
                           type={"search"}
                           placeholder={"Recherche"}
                           className={styles.textSearch}/>
                    <button type={"submit"} className={styles.searchButton}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
                <div className={styles.searchPreview} id={"searchComponent"}>
                    <p>
                        Preview
                    </p>
                </div>
            </div>
        </>
    )
}

export default NavSearch