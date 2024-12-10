// components/Chip.tsx
interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function Chip({ label, active, onClick }: ChipProps) {
  return (
    <span
      className={`
        px-4 py-2 
        rounded-full cursor-pointer
        border border-blue-500
        ${active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}
      `}
      onClick={onClick}
    >
      {label}
    </span>
  );
}
