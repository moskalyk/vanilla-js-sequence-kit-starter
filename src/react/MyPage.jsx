import React from 'react'
import { useOpenConnectModal } from '@0xsequence/kit'
import { useDisconnect, useAccount } from 'wagmi'

function MyPage() {
    const { setOpenConnectModal } = useOpenConnectModal()

    const { isConnected } = useAccount()
    const {disconnect} = useDisconnect()

    const onClick = () => {
        setOpenConnectModal(true)
    }

    return (
        <>
        <div style={{textAlign:'center'}}>
            <br/>
            {isConnected && <div style={{cursor: 'pointer'}} onClick={() => disconnect()} style={{position: 'fixed', top: '30px', right: '30px'}}>
                sign out
            </div> }
            <br/>
            <br/>
            {!isConnected &&<button style={{cursor: 'pointer'}} onClick={onClick}>
                connect
            </button> }
            <br/>
            <br/>
            <br/>
        </div>
        </>
    )
}

export default MyPage