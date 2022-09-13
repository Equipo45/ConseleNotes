const yargs = require('yargs')
const notes = require('./notes.js')
//Yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
     command:'remove',
     describe:'remove new note',
     builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
     },
     handler:function(argv){
        notes.removeNote(argv.title)
     }
})

yargs.command({
    command:'list',
    describe:'list the notes',
    handler:function(){
        console.log('Remove the list')
    }
})

yargs.command({
    command:'list',
    describe:'list the notes',
    handler:function(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
     },
    handler:function(argv){
        notes.readNote(argv.title)
     }
})

yargs.parse()
