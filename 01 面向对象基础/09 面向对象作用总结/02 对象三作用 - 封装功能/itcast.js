/**
 * ���ߣ����ǲ��ͽ�������
 * �������ڣ�2015/12/25
 * ������ͨ�ÿ��
 * ��Ȩ���� Υ�߱ؾ�
 */

//����һ������ - ������$
var $$ = function() {};
//�ڶ���д��
$$.prototype = {
    $id:function(id){
        return document.getElementById(id)
    },
    //�ַ���
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


//�ڿ����ʵ��������������ʹ�õ�ʹ�þͲ���ʵ������
$$ = new $$();
