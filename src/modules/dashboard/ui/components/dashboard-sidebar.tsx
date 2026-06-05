'use client'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { BotIcon, StarIcon, VideoIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import DashboardUserButton from './dashboard-user-button'

const firstSection = [
  {
    icon: VideoIcon,
    label: 'Meetings',
    href: '/meetings',
  },
  {
    icon: BotIcon,
    label: 'Agents',
    href: '/agents',
  },
]

const secondSection = [
  {
    icon: StarIcon,
    label: 'Upgrade',
    href: '/upgrade',
  },
]

const DashboardSidebar = () => {
  const pathname = usePathname()

  return (
    <Sidebar>
      {/* Header */}
      <SidebarHeader className="px-4 py-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          <p className="text-lg font-semibold tracking-tight">Meet.AI</p>
        </Link>
      </SidebarHeader>

      <Separator />

      {/* Main Content */}
      <SidebarContent className="flex flex-col gap-0">
        {/* First Section — Meetings & Agents */}
        <SidebarGroup className="py-3">
          <SidebarGroupContent>
            <div className="flex flex-col gap-1 px-2">
              {firstSection.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        {/* Second Section — Upgrade */}
        <SidebarGroup className="py-3">
          <SidebarGroupContent>
            <div className="flex flex-col gap-1 px-2">
              {secondSection.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-3 border-t">
        <DashboardUserButton />
      </SidebarFooter>
    </Sidebar>
  )
}

export default DashboardSidebar