'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
  SidebarGroupLabel
} from '@/components/ui/sidebar'
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react'
import Link from 'next/link'

const items = [
  {
    title: 'History',
    url: '/playlists/history',
    icon: HistoryIcon
  },
  {
    title: 'Liked videos',
    url: '/playlists/liked',
    icon: ThumbsUpIcon
  },
  {
    title: 'All playlists',
    url: '/playlists',
    icon: ListVideoIcon
  }
]

const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false}
                onClick={() => {}}
              >
                <Link
                  href={item.url}
                  className='flex items-center gap-4'
                >
                  <item.icon />
                  <span className='text-sm font-medium'>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default PersonalSection
