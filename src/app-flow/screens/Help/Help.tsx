import { useState } from 'react'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { SegTabs } from '../../kit/SegTabs/SegTabs'
import { TopBar } from '../../kit/TopBar/TopBar'
import { HelpChat } from './sections/HelpChat/HelpChat'
import { HelpFaq } from './sections/HelpFaq/HelpFaq'
import './Help.css'

type Tab = 'faq' | 'chat'

const tabs: { id: Tab; label: string }[] = [
  { id: 'faq', label: 'Common questions' },
  { id: 'chat', label: 'Chat with us' },
]

export function Help() {
  const [tab, setTab] = useState<Tab>('faq')

  return (
    <AppScreen bare>
      <TopBar back="/app/profile" title="Help and support" subtitle="We reply in under 2 minutes" />
      <div className="help__tabs">
        <SegTabs label="Help view" items={tabs} active={tab} onChange={setTab} />
      </div>
      {tab === 'faq' ? <HelpFaq onChat={() => setTab('chat')} /> : <HelpChat />}
    </AppScreen>
  )
}
