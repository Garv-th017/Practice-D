import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { setDemo, useDemo, type Profile } from '../../kit/demoStore'
import { TopBar } from '../../kit/TopBar/TopBar'
import { AvatarEdit } from './sections/AvatarEdit/AvatarEdit'
import { ProfileForm } from './sections/ProfileForm/ProfileForm'
import './EditProfile.css'

export function EditProfile() {
  const navigate = useNavigate()
  const { profile } = useDemo()
  const [draft, setDraft] = useState<Profile>(profile)
  const valid = draft.name.trim().length > 1 && draft.phone.replace(/\D/g, '').length === 10 && draft.email.includes('@')
  const changed = JSON.stringify(draft) !== JSON.stringify(profile)

  return (
    <AppScreen bare>
      <TopBar back="/app/profile" title="Edit profile" />
      <AppBody className="edit-profile__body">
        <AvatarEdit name={draft.name} />
        <ProfileForm value={draft} onChange={(patch) => setDraft((d) => ({ ...d, ...patch }))} />
      </AppBody>
      <BottomBar>
        <AppButton
          disabled={!valid || !changed}
          onClick={() => {
            setDemo({ profile: draft })
            navigate('/app/profile')
          }}
        >
          {changed ? 'Save changes' : 'No changes yet'}
        </AppButton>
      </BottomBar>
    </AppScreen>
  )
}
