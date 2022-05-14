// 使用jQuery实现上传图片功能
$("#picture").change(function(){
    var file = $("#picture")[0].files[0]; //如果后台用 MultipartFile处理，直接传给后台file
    if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onloadend = function (e) {
            $("img").attr("src",e.target.result);    //e.target.result就是最后的路径地址(base 64)
        };
    }
});

const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
const suffix = this.dataset.sizing || '';
// 下面这句用于改变CSS样式
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// 利用addEventListener来获取 拖动进度条时的变化 将新的进度条对应的值更新到CSS变量中
// 可以及时调整效果！
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));//用于感应拖动条 获得更新的值