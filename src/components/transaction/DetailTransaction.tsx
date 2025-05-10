import Drawer from "../microComponents/Drawer.tsx";
import Button from "../microComponents/Button.tsx";
import type {transaction} from "../../services/transaction/useLocalData.types";
import Heading from "../microComponents/Heading.tsx";
import IconError from "../microComponents/icons/IconError.tsx";
import IconSuccess from "../microComponents/icons/IconSuccess.tsx";


type TransactionItemPropsType = {
    data: transaction;
};

const DetailTransaction = ({data}: TransactionItemPropsType) => {
    return (
        <div className="flex justify-end">
            <Drawer
                trigger={<Button className="px-6!" borderColor="var(--text-color)" variant="outline" size="lg"
                                 radius="full" backgroundColor="var(--content-bg)"
                                 color="var(--text-color)">جزییات</Button>}>


                <Heading color="darkGray" size="xl" weight="bold" align="center">
                    <div className="flex justify-center items-center gap-2 font-bold text-lg">
                        {data.status ? <><span>جزئیات تراکنش موفق </span><span><IconSuccess/></span></> :
                            <><span>جزئیات تراکنش ناموفق </span><span><IconError/></span></>
                        }
                    </div>

                </Heading>
                <div className="rounded-2xl p-5 my-6 bg-mainBg shadow-light">
                    <div className={`rounded-2xl p-3 ${data.status ? "bg-successBg " : "bg-errorBg"}`}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-regular text-xs">مبلغ تراکنش:</span>
                            <span className="font-regular text-xs">
                                    <span className="font-bold text-sm me-1">{data.price}</span>
                                      <span>تومان</span>
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-regular text-xs">سرویس تراکنش:</span>
                            <span className="font-regular text-xs">{data.title}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-regular text-xs">نحوه پرداخت:</span>
                            <span className="font-regular text-xs">{data.pay_type}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-regular text-xs">تاریخ تراکنش:</span>
                            <span className="font-regular text-xs">{data.date} {data.day}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-regular text-xs">زمان تراکنش:</span>
                            <span className="font-regular text-xs">{data.time}</span>
                        </div>
                        {data.status && <div className="flex justify-between items-center mb-2">
                            <span className="font-regular text-xs">شماره همراه:</span>
                            <span className="font-regular text-xs">{data.mobile}</span>
                        </div>}
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-regular text-xs">کدپیگیری:</span>
                            <span className="font-regular text-xs">{data.tracking_code}</span>
                        </div>
                    </div>
                </div>
                <Button variant="full" size="xxl" radius="md" color="white" backgroundColor="var(--secondary-color)">
                    اشتراک گذاری تراکنش
                </Button>

            </Drawer>
        </div>
    );
};

export default DetailTransaction;