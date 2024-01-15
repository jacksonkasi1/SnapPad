import { IconButton } from '@heathmont/moon-core-tw'
import { FilesGeneric } from '@heathmont/moon-icons-tw'
import { twMerge } from 'tailwind-merge'

const NewNoteButton = ({ className, ...props }) => {
    return (
        <IconButton
            {...props}
            variant="ghost"
            size='sm'
            className={twMerge('bg-trunks/10 hover:bg-trunks/20', className)}
            icon={<FilesGeneric className="text-trunks" />}
        />
    )
}

export default NewNoteButton
