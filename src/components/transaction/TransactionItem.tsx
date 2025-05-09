import StatusBox from "./StatusBox.tsx";
import type {transaction} from "../../services/transaction/useLocalData.types";
import Card from "../microComponents/Card.tsx";
import DetailTransaction from "./DetailTransaction.tsx";

type TransactionItemPropsType = {
    data: transaction;
};

const TransactionItem = ({data}: TransactionItemPropsType) => {
    return (
        <Card>
            <div className="px-3 h-[97px]">
                <div className="flex justify-between items-center py-3">
                    <span className="text-sm">{data.title}</span>
                    {
                        data.status ?
                            <div>
                                <span>کد پیگیری:</span>
                                <span>{data.tracking_code}</span>
                            </div>
                            :
                            <StatusBox/>

                    }

                </div>

                <hr className="text-gray-300"/>

                <div className="grid grid-cols-3 items-center py-3">

                    <div className="flex items-center gap-1">
                        <span>{data.price}</span>
                        <span className="text-xs text-gray-600">تومان</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span>{data.time}</span>
                        <span>{data.date}</span>
                    </div>

                    <DetailTransaction data={data}/>


                </div>
            </div>
        </Card>
    );
};

export default TransactionItem;