interface SidebarAccordionItem {
    key: string
    ariaLabel: string
    title: string
    listbox: SidebarListbox
}

interface SidebarListbox {
    links?: SidebarListItem[]
    accordions?: SidebarAccordionItem[]
}

interface SidebarListItem {
    key: string
    link: SidebarLink
}

interface SidebarLink {
    label: string
    href: string
}