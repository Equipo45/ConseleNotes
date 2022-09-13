# ConseleNotes
A console application for taking remainder notes

## Instructions

Once you have download the package and install it with ```npm i``` the commands are:
* Add note to the list
  * Command name: add
  * Parameters: title and body 
  
* Remove note from the list
  * Command name: remove
  * Parameters: title and body 
  
* List all the notes
  * Command name: list
  * Parameters: title and body 
  
* Read a note with an specific title
  * Command name: read
  * Parameters: title and body 

## EXAMPLE

**CONSOLE**: 
```node app.js add --title="Comida" --body="Comprar comida a las 4:30"``` 

*RESPONSE: 
Duplicates not found*

**CONSOLE**: 
```node app.js list ```  

*RESPONSE: 
Listing notes
{ title: 'Comida', body: 'Comprar comida a las 4:30' }*
