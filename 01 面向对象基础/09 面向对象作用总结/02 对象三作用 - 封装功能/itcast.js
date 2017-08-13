/**
 * 作者：传智播客教育集团
 * 开发日期：2015/12/25
 * 描述：通用框架
 * 版权所有 违者必究
 */

//定义一个对象 - 名字是$
var $$ = function() {};
//第二种写法
$$.prototype = {
    $id:function(id){
        return document.getElementById(id)
    },
    //字符串
    ltrim: function (str) {
        return str.replace(/(^\s*)/g, '');
    },
    rtrim: function (str) {
        return str.replace(/(\s*$)/g, '');
    },
    trim: function (str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }
}


//在框架中实例化，这样外面使用的使用就不用实例化了
$$ = new $$();
