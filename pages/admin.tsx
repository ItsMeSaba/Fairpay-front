import { SalaryItems } from "components/salaryItems/salaryItems";
import { GetServerSideProps } from "next";
import data from "components/salaryItems/dummyData"

export default function Admin() {
    console.log(data);
    
    return (
        <>
            <h1>ADMIN</h1>
            
            <SalaryItems items={data} />
        </>
    )
}
