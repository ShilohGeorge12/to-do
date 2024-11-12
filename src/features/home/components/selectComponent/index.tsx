import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SelectComponentProps {
	value: number;
	onChange: (value: string) => void;
}

export function SelectComponent({ value, onChange }: SelectComponentProps) {
	return (
		<Select
			defaultValue={String(value)}
			onValueChange={onChange}>
			<SelectTrigger
				type="button"
				className="p-2 font-medium border-2 border-black rounded-lg md:w-1/2 outline-0 focus:outline-0">
				<SelectValue placeholder={`limit per page`} />
			</SelectTrigger>
			<SelectContent className="">
				<SelectItem value="4">4</SelectItem>
				<SelectItem value="8">8</SelectItem>
				<SelectItem value="12">12</SelectItem>
			</SelectContent>
		</Select>
	);
}
