export const SectionLabel = ({ label, labelColor }: { label: string, labelColor: string }) => {
    return (
        <span className={`block border-l border-amber-300 pl-2 font-medium text-cyan-950 ${labelColor} text-sm`}>
            {label}
        </span>
    )
}