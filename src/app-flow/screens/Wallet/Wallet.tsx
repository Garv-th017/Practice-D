import { useState } from 'react'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { SegTabs } from '../../kit/SegTabs/SegTabs'
import { TopBar } from '../../kit/TopBar/TopBar'
import { WalletBalance } from './sections/WalletBalance/WalletBalance'
import { WalletHistory, type WalletEntry } from './sections/WalletHistory/WalletHistory'
import { WalletOffers } from './sections/WalletOffers/WalletOffers'
import './Wallet.css'

type Tab = 'history' | 'offers'

const tabs: { id: Tab; label: string }[] = [
  { id: 'history', label: 'History' },
  { id: 'offers', label: 'Offers' },
]

const initialHistory: WalletEntry[] = [
  { id: 'h1', title: 'Cashback on Delhi → Agra', when: '16 Oct', amount: 50 },
  { id: 'h2', title: 'Refund for Pune → Goa', when: '4 Oct', amount: 764 },
  { id: 'h3', title: 'Paid for Agra → Delhi', when: '2 Oct', amount: -699 },
  { id: 'h4', title: 'Added money', when: '1 Oct', amount: 1135 },
]

export function Wallet() {
  const [tab, setTab] = useState<Tab>('history')
  const [balance, setBalance] = useState(1250)
  const [history, setHistory] = useState(initialHistory)

  const addMoney = (amount: number) => {
    setBalance((b) => b + amount)
    setHistory((h) => [{ id: `add-${h.length}`, title: 'Added money', when: 'Just now', amount }, ...h])
    setTab('history')
  }

  return (
    <AppScreen bare>
      <TopBar back="/app/profile" title="Wallet and offers" />
      <AppBody className="wallet__body">
        <WalletBalance balance={balance} onAdd={addMoney} />
        <SegTabs label="Wallet view" items={tabs} active={tab} onChange={setTab} />
        {tab === 'history' ? <WalletHistory entries={history} /> : <WalletOffers />}
      </AppBody>
    </AppScreen>
  )
}
