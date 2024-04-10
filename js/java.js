function addParamToUrl(url, param, value) {
    url += (url.indexOf('?') === -1) ? '?' : '&';
    url += encodeURIComponent(param) + '=' + encodeURIComponent(value);
    return url;
}

function navigateToUrl() {
    var baseUrl = '';
    var param = 'param';
    var a=document.getElementById("value");
    var value = a.value;
    var newUrl = addParamToUrl(baseUrl, param, value);
    window.location.href = newUrl;
}// 查询url上链接的参数与参数值
function getQueryString(name) {
    var url = window.location.search; // 获取URL
    var pattern = new RegExp("[\?\&]" + name + "=([^\&]+)", "i"); // 正则匹配URL
    var matcher = pattern.exec(url);
    if (matcher == null || matcher.length < 1) {
    return "";
    }
    return decodeURIComponent(matcher[1]); // 输出指定的参数值 中文也可以
}
function f(name,id){
    document.getElementById(id).innerHTML =name;
}function f1(name,id){
    document.getElementById(id).value = name;
}
