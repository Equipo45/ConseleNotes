const fs = require("fs")
const chalk = require('chalk')

const getNotes = () =>{
    return 'Your notes...'
}

const addNote = (title,body) => {
    const notes = loadNotes()
    //If is equal the duplicates is fill in
    const duplicateNote = notes.find((note) => note.title === title )
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        savedNotes(notes)
        console.log('Duplicates not found')
    }else{
        console.log('Title already taken')
    }

}

const savedNotes = (notes) => {
    //We convert from JSON to string , even if the pharenthesis is up
    const dataJSON =JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const bufferNotes = fs.readFileSync('notes.json')
        const jsonNotes = bufferNotes.toString()
        //En este caso esto devolvera una lista con jsons
        return JSON.parse(jsonNotes)
    }catch(e){
        console.log("Data can´t be loaded, creating notes.json file")
        return []
    }   
}

const removeNote = (title) => {
    console.log(`The note that is going to be remove has title: ${title}`)

    const notes = loadNotes()
    const delete_notes = notes.filter((note) => !(note.title === title))
    if(notes.length !== delete_notes.length){
        savedNotes(delete_notes)
        console.log(chalk.green.inverse("Return deleted notes"))
    }else{
        console.log(chalk.red.inverse("No notes deleted"))
    }
    

}

const listNotes = () => {
    const notesJson = loadNotes()
    if(notesJson.length > 0){
        console.log(chalk.green.inverse("Listing notes"))
        notesJson.forEach(note => {
            console.log(note)
        });
        
    }else{
        console.log(chalk.red.inverse("Can´t list the notes"))
    }
}

const readNote = (title) =>{
    const notes = loadNotes()
    const noteFound = notes.find((note) => note.title === title)

    try{
        console.log(chalk.inverse(noteFound.title))
        console.log(noteFound.body)
    } catch (e) {
        console.log(chalk.red(`Error note with title ${title} not found! ${e}`))
    }
}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}