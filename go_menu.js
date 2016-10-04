//makeDropdown takes a UL element, and turns all child li-uls into hidden creatures, and assigns the buttons above them with an Open method.
function makeDropdown(ul,isChild){
    if( isChild){
        ul.style.display = "none";
    }

    function openChildMaker(child){
        return function(){
            child.style.display = "inline";
        }
    }

    for (var i = 0; i < ul.children.length; i++){
        var li = ul.children[i];
        if (li.children.length > 1 ){
            makeDropdown(li.children[1],true)
            li.children[0].onclick = openChildMaker(li.children[1]);
        }
    }
}



//This is the simple two level menu- Using selects when children exist.
function makeMenu(top){
    var resUl = document.createElement("ul"); 

    for(var p in top.Children){
        var c = top.Children[p];

        var li = document.createElement("li"); 
        resUl.appendChild(li);
        
        var newBut = document.create("button");
        newBut.innerHTML = c.Name;
        li.appendChild(newBut);
        if (c.Children) {
            li.appendChild(makeMenu(c));
        }else {
            newBut = document.createElement("button");
        }
    }

    return res;
}
