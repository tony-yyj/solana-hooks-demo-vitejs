import {useAccountInfo} from "@orderly.network/hooks";

export default function AccountInfo(){
    const { data: accountInfo, isLoading } = useAccountInfo();
    if (!accountInfo  || isLoading) {
        return 'loading';
    }

    const {
        account_id,
    } = accountInfo;
    return (
        <div>
            <p>account_id: {account_id}</p>

        </div>
    )
}