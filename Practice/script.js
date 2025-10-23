const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const searchArr = [];
searchBtn.addEventListener('click',function(){
    if (searchInput.value != '') {
        searchArr.push(searchInput.value);
    const li = document.createElement('li');
    li.textContent = searchInput.value;
    document.querySelector('#searchList').appendChild(li);
    searchInput.value = '';
    }
    
});
