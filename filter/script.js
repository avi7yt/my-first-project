const search = document.getElementById('search');
const searchedItem = [];
const searchList = document.getElementById('searchList');

// search.addEventListener('click',function(e){
//    searchList.style.display = 'block';
// });

search.addEventListener('keypress', function(e){
    searchList.style.display = 'block';
    


    if (e.key == 'Enter') {
        searchedItem.push(search.value);
        const listItem = document.createElement('li');
        listItem.setAttribute('class','px-3 py-3 border border-gray-300 hover:border-gray-500 hover:bg-gray-300 rounded-lg cursor-pointer');
        listItem.textContent = searchedItem[searchedItem.length - 1];
        searchList.appendChild(listItem);
        console.log(searchedItem);
        search.value = ''; 
    }
})

search.addEventListener('keypress',function(e){
    
});