import { useEffect } from 'react';
import {onboard, VerifyRHat} from './components/oboard'

function RHAT_CLUB() {

    useEffect(() => {

        const ConnectWallet = async () => {
            //var walletCheckResult = await onboard.walletCheck();
            //const wallet = onboard;
            const selected = await onboard.walletSelect();
            if(selected)
            {
                await onboard.walletCheck();
                await VerifyRHat();
            }
        };
        ConnectWallet();

    },[]);

    return null;
}

export default RHAT_CLUB;