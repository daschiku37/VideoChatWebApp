const create_room = document.getElementById('create-room');
const paste_link = document.getElementById('paste-link');
const join = document.getElementById('join');
const chatroomlink = document.getElementById('chatroomlink');
const homeurl = window.location.origin;
const copytoclipboard = document.getElementById('copytoclipboard');

if(paste_link && join)
{
    //Paste Link in Input
    paste_link.oninput = ()=>{
        var link = paste_link.value;
        join.setAttribute('href',link);
    };

    //Join Room
    join.onclick = (event)=> {
        //stop the propagation
        event.stopPropagation();
        if(paste_link.value.length > 0){
            join.click();
        }
    };
}

if(create_room)
{
    //Create link (AJAX Call)
    create_room.onclick = ()=> {
        $.ajax({
            type:"GET",
            url:"createroomlink/",
            success: function(result){
                // console.log('result');
                if(result.valid)
                {
                    var link = homeurl+'/'+result.roomid;
                    chatroomlink.value = link;
                }   
                else{
                    chatroomlink.value = result.message;
                }         
            },
            error:function(result){
                console.error(result);
            }
        })
    };
}

if(chatroomlink && copytoclipboard)
{
    //CopytoClipBoard
    copytoclipboard.onclick = ()=>{
        navigator.clipboard.writeText(chatroomlink.value);
    };
}

