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
    console.log(data)
    return (
        <div className="flex justify-end">
            <Drawer
                trigger={<Button className="px-6!" borderColor="var(--text-color)" variant="outline" size="lg"
                                 radius="full"
                                 color="var(--text-color)">جزییات</Button>}>

                <Heading color="darkGray" size="xl" weight="bold" align="center">
                    <div className="flex justify-center items-center gap-2">
                        {data.status ? <><span>جزئیات تراکنش موفق </span><span><IconSuccess/></span></> :
                            <><span>جزئیات تراکنش ناموفق </span><span><IconError/></span></>
                        }
                    </div>

                </Heading>
                <div className="rounded-md p-3 my-6 bg-gray-50">
                    <div className={`rounded-md p-3 ${data.status ? "bg-green-50 " : "bg-red-50"}`}>
                        <div className="flex justify-between items-center">
                            <span>مبلغ تراکنش:</span>
                            <span>
                                    <span>250,000</span>
                                      <span>تومان</span>
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>سرویس تراکنش:</span>
                            <span>خرید شارژ ایرانسل</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>نحوه پرداخت:</span>
                            <span>کیف پول</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>تاریخ تراکنش:</span>
                            <span>سه‌شنبه ۹۹/۰۵/۰۶</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>زمان تراکنش:</span>
                            <span>۲۲:۱۵</span>
                        </div>
                        {data.status && <div className="flex justify-between items-center">
                            <span>شماره همراه:</span>
                            <span>۰۹۱۲۲۳۳۴۴۵۶</span>
                        </div>}
                        <div className="flex justify-between items-center">
                            <span>کدپیگیری:</span>
                            <span>۹۱۲۳۴۵۶۷۸۹</span>
                        </div>
                    </div>
                </div>
                <Button variant="full" size="xxl" radius="md" color="white" backgroundColor="purple">
                    اشتراک گذاری تراکنش
                </Button>

            </Drawer>
        </div>
    );
};

export default DetailTransaction;