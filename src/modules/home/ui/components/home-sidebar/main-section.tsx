'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton
} from '@/components/ui/sidebar'
import { FlameIcon, HomeIcon, PlaySquareIcon } from 'lucide-react'
import Link from 'next/link'

const items = [
  {
    title: 'Home',
    url: '/',
    icon: HomeIcon
  },
  {
    title: 'Subscriptions',
    url: '/feed/subscriptions',
    icon: PlaySquareIcon,
    auth: true
  },
  {
    title: 'Trending',
    url: '/feed/trending',
    icon: FlameIcon
  }
]

const MainSection = () => {
  return (
    <SidebarGroup>
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

export default MainSection
