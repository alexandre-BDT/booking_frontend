export interface steps {
  text: string,
  value: "custom" | "design",
  annotation: string | null,
  action: () => void
}