console.log('Welcome to NOTES APP')
showNotes();

//if user add note , add it in the localStorage

let addbtn = document.getElementById('btnaddnote');
addbtn.addEventListener('click',function(){
    let noteText = document.getElementById('noteText');
    let note = localStorage.getItem("note");
    if(note == null){
         noteobj =[];
    }else{
        noteobj=JSON.parse(note);
    }
    noteobj.push(noteText.value);
    localStorage.setItem('note',JSON.stringify(noteobj));
    noteText.value ='';
    console.log(noteobj);
    showNotes();
})
//to Show the note
function showNotes(){
    let note = localStorage.getItem("note");
    if(note == null){
         noteobj =[]
    
    }else{
        noteobj=JSON.parse(note);
    }
    let text ='';
    noteobj.forEach(function(element,index) {
        text+=`
        <div class="card mx-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index +1}</h5>
                  <p class="card-text"> ${element} </p>
                  <button id="${index}" onclick="deleteing(this.id)" class="btn btn-primary">Delete</button>
                </div>
              </div>
        `
    });
    let noteEle = document.getElementById('note');
    if(noteobj.length !=0){
        noteEle.innerHTML = text;
    }else{
        noteEle.innerHTML = 'No Note is available. Please write some notes';
    }
    
}


//delete function
function deleteing(index){
    console.log('hi');
    let note = localStorage.getItem("note");
    if(note == null){
         noteobj =[]
    
    }else{
        noteobj=JSON.parse(note);
    }
    noteobj.splice(index,1);
    localStorage.setItem('note',JSON.stringify(noteobj));
    showNotes()
};
//search the note

let search = document.getElementById('search');
search.addEventListener("input",function(){
    let inputval = search.value.toLowerCase();
    let cardnote = document.getElementsByClassName('card-text');
    Array.from(cardnote).forEach(function(element){
        let cardtext =element.textContent.toLowerCase();
        if(cardtext.includes(inputval)){
            element.parentElement.parentElement.style.display="block";
        }else{
            element.parentElement.parentElement.style.display="none";
    }
})
}) 
