import { useState } from 'react'
import { Icon } from '../../../../../components/Icon/Icon'
import { initials } from '../../../../kit/demoStore'
import './AvatarEdit.css'

export function AvatarEdit({ name }: { name: string }) {
  const [picked, setPicked] = useState(false)

  return (
    <section className="avatar-edit">
      <span className={`avatar-edit__photo ${picked ? 'is-photo' : ''}`}>
        {picked ? <Icon name="user" size={34} /> : initials(name) || '?'}
      </span>
      <button type="button" className="k-chip avatar-edit__btn" onClick={() => setPicked((p) => !p)}>
        <Icon name="image" size={13} /> {picked ? 'Remove photo' : 'Change photo'}
      </button>
    </section>
  )
}
