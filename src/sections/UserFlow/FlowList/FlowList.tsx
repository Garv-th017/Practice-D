import { flowScreens } from '../../../app-flow/flow'
import { lanes, places } from '../userFlowData'
import { Wireframe } from '../Wireframe/Wireframe'
import './FlowList.css'

/** Phone-width version of the diagram: one list per journey */
export function FlowList({ selected, onSelect }: { selected: string | null; onSelect: (id: string) => void }) {
  return (
    <div className="uf-list">
      {lanes.map((lane, i) => (
        <section key={lane.id} className="uf-list__lane">
          <h2>{lane.title}</h2>
          <ul>
            {flowScreens
              .filter((s) => places[s.id].lane === i)
              .sort((a, b) => places[a.id].row - places[b.id].row || places[a.id].col - places[b.id].col)
              .map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    className={`uf-list__item ${selected === s.id ? 'is-selected' : ''}`}
                    onClick={() => onSelect(s.id)}
                  >
                    <Wireframe id={s.id} className="uf-list__wire" />
                    <b>{s.title}</b>
                  </button>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
