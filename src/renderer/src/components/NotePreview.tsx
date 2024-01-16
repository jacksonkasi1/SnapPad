import { cn, formatDate } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
    isActive?: boolean
} & ComponentProps<'div'>

const NotePreview = ({
    title,
    lastEdited,
    isActive = false,
    className,
    ...props
}: NotePreviewProps) => {
    return (
        <div
            className={cn(
                'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75 bg-gohan',
                {
                    'bg-piccolo': isActive,
                    'hover:bg-jiren': !isActive
                },
                className
            )}
            {...props}
        >
            <h3 className="mb-1 font-bold truncate transition-colors text-moon-24">{title}</h3>
            <p className="inline-block w-full mb-2 font-light text-left text-moon-16">
                {formatDate(lastEdited)}
            </p>
        </div>
    )
}

export default NotePreview
