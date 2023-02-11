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
} & Partial<NoteData>

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

export type EditNoteProps = {
    onSubmit: (id:string, data:NoteData) => void
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
    onDeleteTag: (id:string)=> void
    onUpdateTag: (id: string, label: string)=> void
}

export type NoteLayoutProps = {
    notes: Note[]
}

export type NoteProps = {
    onDelete: (id: string)=>void
}

export type EditTagsModalProps = {
    show: boolean
    availableTags: Tag[]
    handleClose: ()=> void
    onDeleteTag: (id:string)=> void
    onUpdateTag: (id: string, label: string)=> void
}