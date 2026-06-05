import { GeneratedAvatar } from "@/components/generated-avatar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, CreditCardIcon, LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardUserButton = () => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  const onLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess() {
          router.push("/sign-in");
        },
      },
    });
  };

  if (isPending || !data?.user) {
    return null;
  }

  return (
    <DropdownMenu>
      {/* Trigger Button */}
      <DropdownMenuTrigger className="flex items-center gap-3 w-full rounded-md px-2 py-2 hover:bg-white/10 transition-colors outline-none cursor-pointer">
        {/* Avatar */}
        <div className="shrink-0">
          {data.user.image ? (
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={data.user.image}
                alt={data.user.name || "User Avatar"}
              />
            </Avatar>
          ) : (
            <GeneratedAvatar
              seed={data.user.name || "User"}
              variant="initials"
            />
          )}
        </div>

        {/* Name + Email */}
        <div className="flex flex-col items-start overflow-hidden flex-1 min-w-0">
          <p className="text-sm font-medium truncate w-full leading-tight capitalize">
  {data.user.name}
</p>
          <p className="text-xs text-muted-foreground truncate w-full leading-tight">
            {data.user.email}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent
        align="end"
        side="top"
        sideOffset={8}
        className="w-56 rounded-lg border border-neutral-700 bg-neutral-900 p-1 shadow-xl z-50"
      >
        {/* User Info Label */}
        <DropdownMenuLabel className="px-2 py-2">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium text-white truncate capitalize">{data.user.name}</span>
            <span className="text-xs text-neutral-400 truncate">
              {data.user.email}
            </span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="my-1 h-px bg-neutral-700" />

        {/* Billing */}
        <DropdownMenuItem className="flex items-center justify-between px-2 py-2 text-sm text-neutral-200 rounded-md cursor-pointer hover:bg-neutral-700 hover:text-white outline-none transition-colors">
          Billing
          <CreditCardIcon className="h-4 w-4 text-neutral-400" />
        </DropdownMenuItem>

        {/* Logout */}
        <DropdownMenuItem
          onClick={onLogout}
          className="flex items-center justify-between px-2 py-2 text-sm text-red-400 rounded-md cursor-pointer hover:bg-red-500/20 hover:text-red-300 outline-none transition-colors"
        >
          Logout
          <LogInIcon className="h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardUserButton;