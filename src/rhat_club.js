import { useEffect } from 'react';
import {onboard} from './components/oboard'

function RHAT_CLUB() {

    useEffect(() => {

        const ConnectWallet = async () => {
            await onboard.walletSelect();
            await onboard.walletCheck();
        };
        ConnectWallet();

    },[]);

    return null;
}

export default RHAT_CLUB;