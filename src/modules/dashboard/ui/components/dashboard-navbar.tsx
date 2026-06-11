'use client'
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar'
import { PanelLeftCloseIcon, PanelLeftIcon, Search } from 'lucide-react';
import { DashboardCommand } from './dashboard-command';
import { useState } from 'react';

const DashboardNavbar = () => {
    const { state, toggleSidebar, isMobile } = useSidebar();
    const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
      <nav className="flex items-center gap-x-2 p-4">
        <Button onClick={toggleSidebar} variant="ghost" size="sm">
          {(state === 'collapsed' || isMobile) ? <PanelLeftIcon /> : <PanelLeftCloseIcon />}
        </Button>
        <Button
          className='h-9 w-[240px] justify-start font-normal text-muted-foreground hover:text-muted-foreground'
          variant="outline"
          size="sm"
          onClick={() => setCommandOpen((prev) => !prev)}
        >
          <Search className="mr-2 h-3.5 w-3.5" />
          Search...
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </nav>
    </>
  )
}

export default DashboardNavbar