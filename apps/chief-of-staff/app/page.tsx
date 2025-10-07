
import { chiefOfStaff } from "@shared/agents-core"

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Chief of Staff — MVP</h1>
      <p>Agent loaded: <strong>{chiefOfStaff.name}</strong></p>
      <ul>
        {chiefOfStaff.tools.map(t => <li key={t}>{t}</li>)}
      </ul>
      <p>API: <code>/api/health</code></p>
    </main>
  )
}
