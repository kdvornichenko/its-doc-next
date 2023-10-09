"use client"

import { Link } from "@nextui-org/link"
import { Accordion, AccordionItem, Listbox, ListboxItem } from "@nextui-org/react"
import { ListboxWrapper } from "./listbox-wrapper"
import { useTheme } from "next-themes"

type Props = {}

import React from 'react';
import { Icon } from "./icon"
import { SidebarAccordionItem, SidebarListbox } from "@/types/sidebar"

export const Sidebar = (props: Props) => {
  const sidebarAccordion: SidebarAccordionItem[] = [
    {
      key: 'checklists',
      ariaLabel: 'Чеклисты',
      title: 'Чеклисты',
      icon: 'checklist',
      listbox: {
        links: [
          {
            key: 'backend',
            link: {
              label: 'Backend-specification',
              href: '#',
            },
          },
          {
            key: 'frontend',
            link: {
              label: 'Front-project',
              href: '#',
            },
          },
          {
            key: 'validation',
            link: {
              label: 'Validation',
              href: '#',
            },
          },
        ],
      },
    },
    {
      key: 'Bitrix',
      ariaLabel: 'Bitrix',
      title: 'Bitrix',
      icon: 'bitrix',
      listbox: {
        accordions: [
          {
            key: 'bitrix-integration-1c',
            ariaLabel: 'Integration-1C',
            title: 'Integration-1C',
            listbox: {
              accordions: [
                {
                  key: 'bitrix-integration-2',
                  ariaLabel: 'Integration-2',
                  title: 'Integration-2',
                  listbox: {
                    links: [
                      {
                        key: 'imitation2',
                        link: {
                          label: 'Imitation2',
                          href: '#',
                        },
                      },
                    ],
                  },
                },
                {
                  key: 'bitrix-integration-3',
                  ariaLabel: 'Integration-3',
                  title: 'Integration-3',
                  listbox: {
                    links: [
                      {
                        key: 'imitation3',
                        link: {
                          label: 'Imitation3',
                          href: '#',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ];

  const { theme } = useTheme();

  const renderListbox = (listbox: SidebarListbox) => {
    if (listbox.links) {
      return (
        <ListboxWrapper>
          <Listbox aria-label="list" variant="bordered" items={listbox.links}>
            {(item) => (
              <ListboxItem
                key={item.key}
                color={theme === 'dark' ? 'danger' : 'primary'}
                variant="shadow"
              >
                <Link className="text-inherit" href={item.link.href}>
                  {item.link.label}
                </Link>
              </ListboxItem>
            )}
          </Listbox>
        </ListboxWrapper>
      )
    } else if (listbox.accordions) {
      return (
        listbox.accordions.map((item) => (
          <Accordion
            variant="splitted"
            selectionMode="multiple"
            isCompact
            key={item.key}
            showDivider
          >
            <AccordionItem
              aria-label={item.ariaLabel}
              title={item.title}
              className="my-2"
            >
              {renderListbox(item.listbox)}
            </AccordionItem>
          </Accordion>
        ))
      )
    } else return null
  };

  return (
    <Accordion
      variant="splitted"
      selectionMode="multiple"
      isCompact
      showDivider
    >
      {sidebarAccordion.map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={item.ariaLabel}
          title={item.title}
          startContent={<Icon icon={item.icon ? item.icon : null} />}
        >
          {renderListbox(item.listbox)}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

