export type IconProps = 'checklist' | 'bitrix' | null

export interface SidebarAccordionItem {
    key: string
    ariaLabel: string
    title: string
    listbox: SidebarListbox
    icon?: IconProps
}

export interface SidebarListbox {
    links?: SidebarListItem[]
    accordions?: SidebarAccordionItem[]
}

export interface SidebarListItem {
    key: string
    link: SidebarLink
}

export interface SidebarLink {
    label: string
    href: string
}