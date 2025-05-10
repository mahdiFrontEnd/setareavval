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
            <div className="relative">
                <div className="flex justify-between items-center p-3">
                    <span className="text-sm">{data.title}</span>
                    {
                        data.status ?
                            <div className="font-light text-xs">
                                <span className="me-1">کد پیگیری:</span>
                                <span>{data.tracking_code}</span>
                            </div>
                            :
                            <StatusBox/>
                    }

                </div>

                <div className="px-3">
                    <div className={`rounded-l-xl h-[24px] w-[4px] absolute top-[40px] right-0 ${data.status ? "bg-successColor " : "bg-errorColor "} `}></div>
                    <hr className=" text-borderColor"/>
                </div>

                <div className="grid grid-cols-3 items-center p-3">

                    <div className="flex items-center gap-1">
                        <span className="text-sm">{data.price}</span>
                        <span className="text-xs  font-light">تومان</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs  font-light">
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