import LoadMoreButton from "components/buttons/loadMore";
import Interviews from "components/Interviews/Interviews";
import fetchInterviews from "database/interviews/fetchInterviews";
import cacheInterviews from "functions/localStorage/interviews/cacheInterviews";
import getCachedInterviews from "functions/localStorage/interviews/getCachedInterviews";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { InterviewType } from "types";


interface Args {
    companyId: string
}

export default function CompanyInterviews(args: Args) {
    const { companyId } = args;
    const [interviews, setInterviews] = useState<InterviewType[]>([]);
    const areInterviewsLeft = useRef(true);
    const isFirstFetchDone = useRef(false);
    
    async function fetch(isFirstFetch = false) {
        // const vacancies = await fetchVanacies(companyId, { skip: skip.current });
        // const newVacancies = await fetchVanacies(companyId, { dateOfLastVacancy: vacancies[vacancies.length-1]?.date });
        if (isFirstFetch) {
            const cachedInterviews = getCachedInterviews(companyId);

            if (cachedInterviews) {
                console.log("LOADED FROM CACHE BRO")
                return setInterviews(cachedInterviews.interviews) 
            }
        }
        
        console.log("LOADED FROM SERVER LOSER")
        const fetchedInterviews = await fetchInterviews(companyId, { dateOfLastInterview: isFirstFetch ? null : interviews[interviews.length-1]?.date });
        
        console.log("fetchInterviews", fetchedInterviews);

        if (fetchedInterviews.length === 0) areInterviewsLeft.current = false;
        else {
            cacheInterviews(companyId, fetchedInterviews);
        }

        if (!isFirstFetchDone.current) isFirstFetchDone.current = true;
        
        setInterviews(currentInterviews => isFirstFetch ? fetchedInterviews : [...currentInterviews, ...fetchedInterviews]);
    }

    useEffect(() => {
        areInterviewsLeft.current = true;

        fetch(true);
    }, [companyId])

    return (
        <div style={{ padding: "1rem 0" }}>
            { interviews.length > 0 && <Interviews interviews={interviews} />}

            { areInterviewsLeft.current && <LoadMoreButton cb={() => fetch(false)} /> }

            { interviews.length === 0 && isFirstFetchDone.current && 
                <h1 
                    style={{
                        color:"white", 
                        textAlign: "center", 
                        padding: "15rem 0", 
                    }}
                >
                    გასაუბრების შეფასებები არ მოიძებნა
                </h1>
            }
        </div>
    )
}