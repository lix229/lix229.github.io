function header(target){
    var arr=target.arr;
    var navBarText=``;
    for(var i=0;i<arr.length;i++){
        var item=arr[i];
        navBarText+=`
            <div class="public-header-navbar-item animated fadeIn">
                <a style="color: rgb(228, 228, 228)" href="${item.link}" target="_blank">${item.label}</a>
            </div>
        `;
    }
    var text=`
        <div class="public-header-wrapper">
            <div class="public-header">
                <a class="public-header-logo" href="./index.html">C.B.M.</div>
                <div class="public-header-navbar">
                    ${navBarText}
                    <div style="clear:both;"></div>
                </div>
            </div>
        </div>
    `;
    $("#"+target.id).html(text);
}