export type Note ={
    id: string
} & NoteData

export type Tag = {
    id: string
    label: string
}
export type NoteData = {
    title: string
    markdown: string
    tags: Tag[]
}

export type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export type RawNote ={
    id: string
} & RawNoteData
export type RawNoteData = {
    title: string
    markdown: string
    tagIds: string[]
}

export type NewNoteProps = {
    onSubmit: (data:NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export type SimplyfiedNote = {
    tags: Tag[]
    title: string
    id: string
}

export type NoteListProp = {
    availableTags: Tag[]
    notes: SimplyfiedNote[]
}

export type NoteLayoutProps = {
    notes: Note[]
}