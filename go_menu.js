


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
