import TransactionItem from "../../components/transaction/TransactionItem.tsx";
import {useTransactionData} from "../../services/transaction/useTransactionData.ts";
import SkeletonLoader from "../../components/microComponents/SkeletonLoader.tsx";

const Home = () => {
    const {data, isLoading, error} = useTransactionData()

    if (isLoading) return <SkeletonLoader height="h-[97px]"/>
    if (error) return <div>Error: {error.message}</div>

    return (
        <>


            {
                data ?
                    <>  {data?.map((item) => (
                        <TransactionItem data={item} key={item.id}/>
                    ))}</> : ''
            }
        </>
    );
}
export default Home;
