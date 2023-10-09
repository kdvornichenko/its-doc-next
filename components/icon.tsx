import { IconProps } from "@/types/sidebar";
import { BitrixIcon, CheckListIcon } from "./icons"

export const Icon = ({ icon }: { icon: IconProps }) => {
    switch (icon) {
        case 'checklist':
            return <CheckListIcon />;
        case 'bitrix':
            return <BitrixIcon />;
        default:
            return <></>;

    }
}