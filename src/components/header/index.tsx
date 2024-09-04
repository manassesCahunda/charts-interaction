import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icon"
import  ModeToggle  from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Notification from '@/components/notification';


export default function Header() {
  return (
    <header className="fixed top-0 w-full   py-2">
      <div className="flex items-center justify-end space-x-5 px-7">  
        <ModeToggle />
        <Notification/>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
