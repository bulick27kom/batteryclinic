var device = navigator.userAgent.toLowerCase();
var apple = device.match(/iphone|ipad|ipod/);

if (apple) {
   
    document.write('<link rel="stylesheet" href="css/safari.css">');
}

