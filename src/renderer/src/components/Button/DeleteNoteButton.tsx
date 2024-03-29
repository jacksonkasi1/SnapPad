import { IconButton } from '@heathmont/moon-core-tw'
import { GenericDelete } from '@heathmont/moon-icons-tw'
import { twMerge } from 'tailwind-merge'

const DeleteNoteButton = ({ ...props }) => {
    return (
        <IconButton
            {...props}
            variant="ghost"
            size="sm"
            className={twMerge('bg-chichi-10 hover:bg-chichi/20', props.className)}
            icon={<GenericDelete className="text-chichi" />}
        />
    )
}

export default DeleteNoteButton
