import { ComponentProps } from 'react'
import DeleteNoteButton from './Button/DeleteNoteButton'
import NewNoteButton from './Button/NewNoteButton'

export const ActionButtonRow = ({ ...props }: ComponentProps<'div'>) => {
    return (
        <div {...props} >
            <NewNoteButton />
            <DeleteNoteButton />
        </div>
    )
}
