window.onload=function(){
    document.onkeypress=function(e){
        var e = e || window.event, input = e.target || el.srcElement;
        if(e.keyCode==13 && input.tagName=='INPUT' && input.classList.contains('pt-input')){
            parent=input.closest('div.pt-popover-content')
            item=parent.querySelector('.pt-menu li .pt-menu-item-label')
            if(item) {
                var event = document.createEvent('HTMLEvents');
                event.initEvent('click', true, false);
                item.dispatchEvent(event);
            }
        }
    };
}