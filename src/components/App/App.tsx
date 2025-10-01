import { useState } from "react"
import css from "./App.module.css"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { fetchNotes } from "../../services/noteService"
import SearchBox from "../SearchBox/SearchBox"
import NoteList from "../NoteList/NoteList"
import Modal from "../Modal/Modal"
import NoteForm from "../NoteForm/NoteForm"
import Pagination from "../Pagination/Pagination"
import { useDebouncedCallback } from "use-debounce"

function App() {
    const [search, setSearch] = useState("")
    const [curPage, setCurPage] = useState(1)
    const [isModalOpen, setOpenModal] = useState(false)

    function openModal() {
        setOpenModal(true)
    }
    function closeModal() {
        setOpenModal(false)
    }
    
    const { data: notes } = useQuery({
        queryKey: ['notes',search,curPage],
        queryFn: () => fetchNotes(search, curPage),
        // query,
        placeholderData: keepPreviousData,
    })

    const handleSearch = useDebouncedCallback((value: string) => {
            setSearch(value)
        }, 500)
        
    
    return (
        <div className={css.app}>
	<header className={css.toolbar}>
                <SearchBox onChange={handleSearch} text={search}></SearchBox>
		        {notes && notes.totalPages>1 && <Pagination curPage={curPage} totalPages={notes?.totalPages ?? 0} setCurrentPage={setCurPage}></Pagination>}
                <button className={css.button} onClick={openModal}>Create note +</button>
                {isModalOpen&&<Modal onClose={closeModal}><NoteForm onClose={closeModal}></NoteForm></Modal>}
            </header>
            <main>
               {notes && notes.notes.length > 0 && (
                <NoteList notes={notes.notes} />
                )}
            </main>
            
</div>
    )
}

export default App