import { noteMocks } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import NotePreview from './NotePreview'

export const NotePreviewList = ({ ...props }: ComponentProps<'ul'>) => {
    return (
        <ul {...props} className={twMerge(props.className)}>
            {noteMocks.map((note, index) => (
                <NotePreview key={`${index}-${note.title}`} {...note} />
            ))}
        </ul>
    )
}
