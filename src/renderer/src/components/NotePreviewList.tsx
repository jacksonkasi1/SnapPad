import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { noteMocks } from '@/store/mocks'
import NotePreview from './NotePreview'

export const NotePreviewList = ({ ...props }: ComponentProps<'ul'>) => {
    if (!noteMocks.length)
        return (
            <ul {...props} className={twMerge('text-center w-full mx-auto pt-4', props.className)}>
                <span>No notes Yet!</span>
            </ul>
        )
    return (
        <ul {...props} className={twMerge(props.className)}>
            {noteMocks.map((note, index) => (
                <NotePreview key={`${index}-${note.title}`} {...note} />
            ))}
        </ul>
    )
}
