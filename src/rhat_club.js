import { useEffect } from 'react';
import {onboard, VerifyRHat} from './components/oboard'
import {TestRhatQuery} from './components/snapshot'


function RHAT_CLUB() {

    useEffect(() => {

        //test onboard
        const ConnectWallet = async () => {
            const selected = await onboard.walletSelect();
            if(selected)
            {
                await onboard.walletCheck();
                await VerifyRHat();
            }
        };
        ConnectWallet();

        //test snapshot
        const QuerySnapshot = async () => {
            await TestRhatQuery();
        }
        QuerySnapshot();

    },[]);

    return null;
}

export default RHAT_CLUB;