export interface Note{
    id: string,
    title: string,
    content: string,
    tag:"Todo" | "Work" | "Personal" | "Meeting" | "Shopping"
}


export interface CreateNoteRequest{
    title: string,
    content: string,
    tag:"Todo" | "Work" | "Personal" | "Meeting" | "Shopping"
}

// interface NoteTag{
//     tag:"Todo" | "Work" | "Personal" | "Meeting" | "Shopping"
// }
