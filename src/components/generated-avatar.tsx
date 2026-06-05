import { createAvatar } from '@dicebear/core'
import { botttsNeutral, initials } from '@dicebear/collection'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

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
          backgroundColor: ['transparent']
        })
      : createAvatar(initials, {
          seed,
          size: 40,
          backgroundColor: ['transparent']
        });

  return (
    <Avatar>
      <AvatarImage src={avatar.toDataUri()} alt="Generated Avatar" className={className} />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  )
}


  