var balanceView
balanceView = (function() {

})()

var displayeView
displayeView = (function() {

})()

var globalView
globalView = (function(bView, dView) {
    var btn = document.querySelector(".btn")
    btn.addEventListener("click", function(event) {
        event.preventDefault()

    })
    var keypad = document
    keypad.addEventListener("keypress", function() {
        if (event.keyCode === 13 || event.which === 13) {
            console.log("ncndj")
        }
    })
})()