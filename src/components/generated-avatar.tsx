import { createAvatar } from '@dicebear/core'
import { botttsNeutral, initials } from '@dicebear/collection'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';

interface GeneratedAvatarProps {
  seed: string;
  className?: string;
  variant: 'botttsNeutral' | 'initials';
}

export const GeneratedAvatar = ({
  seed,
  className,
  variant
}: GeneratedAvatarProps) => {
  const avatar =
    variant === 'botttsNeutral'
      ? createAvatar(botttsNeutral, {
          seed,
          size: 40,
          backgroundColor: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf'],
        })
      : createAvatar(initials, {
          seed,
          size: 40,
          backgroundColor: ['4f46e5', '7c3aed', '0ea5e9', '10b981', 'f59e0b'],
          textColor: ['ffffff'],
          fontSize: 40,
        });

  return (
    <Avatar className={cn("h-8 w-8 rounded-full ring-2 ring-white/20", className)}>
      <AvatarImage
        src={avatar.toDataUri()}
        alt="Generated Avatar"
        className="h-full w-full rounded-full object-cover"
      />
      <AvatarFallback className="text-xs font-bold bg-indigo-600 text-white rounded-full">
        {seed.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  )
}