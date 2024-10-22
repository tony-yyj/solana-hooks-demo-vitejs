import {useAccount} from "@orderly.network/hooks";
import {AccountStatusEnum} from "@orderly.network/types";
import {useMemo} from "react";

export default function SignIn() {
    const {account, state} = useAccount();

    const signIn = async () => {
        await account.createOrderlyKey(300)
    }
    const register = async () => {
        await account.createAccount();
    }
    const message = useMemo(() => {

        if (state.status <= AccountStatusEnum.NotConnected) {
            return 'pls connect wallet';
        }
        if (state.status <= AccountStatusEnum.Connected) {
            return 'pls sign in';
        }
        if (state.status <=AccountStatusEnum.DisabledTrading) {
            return 'pls enable trading';
        }
        return 'all done';
    }, [state]);
    return (
        <div>
            <h2>{message}</h2>
            <button onClick={register}>register account</button>
            <button onClick={signIn}> enable trading</button>
        </div>
    )
}