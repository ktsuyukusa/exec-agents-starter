
export type AgentSpec = {
  name: string
  langs: string[]
  budgetUSD: number
  tools: string[]
}
export const defineAgent = (spec: AgentSpec) => spec

export const chiefOfStaff = defineAgent({
  name: "ChiefOfStaff",
  langs: ["ja","en","pl","ro"],
  budgetUSD: 5,
  tools: ["email.read","email.send","calendar.list","calendar.create","files.search","files.summarize"]
})
