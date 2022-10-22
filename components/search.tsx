import style from "styles/components/search.module.sass"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import technologies from "data/technologies";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { suggestCompanyBySearch } from "database/functions/company/fetchCompany";
import Link from "next/link";
import Image from "next/image";
import { getCompanyImage } from "functions/companies/images/getCompanyImage";
import { ValidCompanyNames } from "types";

interface Args {
    width?: string
}

export default function Search(args: Args) {
    const [results, setResults] = useState<string[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const { width } = args;
    const divRef = useRef<any>();

    async function search(input: string) {
        if (input.length === 0) return setResults([]);

        const companies = await suggestCompanyBySearch(input);

        // const tehnologies = technologies.filter(technology => technology.name.toLowerCase().startsWith(input.toLowerCase()));

        // setResults([...companies?.map(company => company.name)]);
        setResults(companies);
    }

    useEffect(() => {
        function handleClickOutside(event: any) {
            // if (!isFocused) return;

            if (divRef.current && !divRef.current.contains(event.target)) {
                setIsFocused(false);
            }
          } 

        document.addEventListener("click", e => {
            handleClickOutside(e);
        });

        return () => {
            document.removeEventListener("click", e => handleClickOutside(e));
        }
    }, [divRef])

    const displayDatalist = results.length > 0 && isFocused ? "initial" : "none";

    return (
        <div className={style.search} style={{ width }} onClick={e => e.stopPropagation()} ref={divRef}>
            <div className={style.searchIcon}>
                <SearchRoundedIcon />
            </div>
            
            <div className={style.inputContainer}>
                {/* <input type="text" onChange={e => search(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setTimeout(() => setIsFocused(false), 100)}/> */}
                <input type="text" onChange={e => search(e.target.value)} onFocus={() => setIsFocused(true)} />
            </div>

            <datalist style={{ display: displayDatalist }}>
                { 
                    results.map(result => <SearchResultItem key={result.name} companyName={result.name} companyUrlName={result.urlName} hideAutocomplete={() => setIsFocused(false)} />)
                }
            </datalist>
        </div>
    )
}


interface SearchResultItemArgs {
    companyName: string, 
    companyUrlName: string,
    hideAutocomplete: () => void // State setter
} 

function SearchResultItem(args: SearchResultItemArgs) {
    const {companyName, companyUrlName, hideAutocomplete} = args;

    const companyImage = getCompanyImage(companyName as ValidCompanyNames);
    
    return (
        <Link href={`/companies/${companyUrlName}`}>
            <div className={style.searchItem} onClick={hideAutocomplete}>
                <div className={style.companyImage}>
                    <Image quality={10} src={companyImage} />
                </div>

                {/* <p><Link href={companyUrlName}>{companyName}</Link></p> */}
                <p>{companyName}</p>
            </div>
        </Link>
    )
}