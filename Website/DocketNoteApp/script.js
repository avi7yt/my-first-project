const addNoteBtn = document.querySelector('#addNoteBtn');
const notesContainer = document.querySelector('.notesContainer');

addNoteBtn.addEventListener('click',function(e){
    const div = document.createElement('div');
    div.innerHTML = `<div class="w-[300px] h-[250px] bg-orange-300 p-5 rounded-2xl flex flex-col gap-3" id="note">
                    <div class="grow">
                        <textarea class="w-full h-full" name="write-note" id="write-note" placeholder="Write your note here--"></textarea>
                    </div>
                    <div class="flex justify-between items-center">
                        <span>May 21,2020</span>
                        <div class="w-[30px] h-[30px] bg-black rounded-full p-4 flex justify-center items-center text-white cursor-pointer">
                            <i class="fa-solid fa-bookmark" id='save'></i>
                        </div>
                    </div>
                </div>`;
        notesContainer.insertAdjacentElement("afterbegin",div);

    let notes = Array.from(notesContainer.children);
   notes.forEach((element) => {
    element.addEventListener('click',function(e){
       const savebtn = document.querySelector('#save');
       savebtn.addEventListener('click',function(){
        console.log(savebtn);
        
        savebtn.setAttribute('class','fa-solid fa-pen');
    
       })
    })
   })
    
});

