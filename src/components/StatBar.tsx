type StatBarProps = {
  label: string
  value: number
}

function StatBar({ label, value }: StatBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-neutral-500">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="mt-1 h-2 w-full rounded-full bg-neutral-200">
        <div
          className="h-2 rounded-full bg-neutral-900 transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default StatBar