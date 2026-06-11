"use client"

import { Dispatch, SetStateAction, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"  
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Home, Settings, User, Plus, Upload } from "lucide-react"

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function DashboardCommand({ open, setOpen }: Props) {
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setOpen])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
   
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 overflow-hidden">
        <VisuallyHidden>
      <DialogTitle>Command Menu</DialogTitle>
    </VisuallyHidden>
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Find a meeting or agent..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                <Home className="mr-2 h-4 w-4" />
                Go to Dashboard
                <kbd className="ml-auto text-xs text-muted-foreground">G D</kbd>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/settings"))}>
                <Settings className="mr-2 h-4 w-4" />
                Open Settings
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/profile"))}>
                <User className="mr-2 h-4 w-4" />
                View Profile
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => runCommand(() => console.log("Create post"))}>
                <Plus className="mr-2 h-4 w-4" />
                Create New Post
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => console.log("Upload"))}>
                <Upload className="mr-2 h-4 w-4" />
                Upload File
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}