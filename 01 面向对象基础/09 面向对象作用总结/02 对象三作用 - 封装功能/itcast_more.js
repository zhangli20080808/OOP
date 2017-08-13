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
    //ȥ����߿ո�
    ltrim:function(str){
        return str.replace(/(^\s*)/g,'');
    },
    //ȥ���ұ߿ո�
    rtrim:function(str){
        return str.replace(/(\s*$)/g,'');
    },
    //ȥ���ո�
    trim:function(str){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //ajax - ǰ������ѧϰ��
    myAjax:function(URL,fn){
        var xhr = createXHR();	//������һ�������������IE6���ݡ�
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    fn(xhr.responseText);
                }else{
                    alert("������ļ���");
                }
            }
        };
        xhr.open("get",URL,true);
        xhr.send();

        //�հ���ʽ����Ϊ�������ֻ������ajax���������Է�������
        function createXHR() {
            //�����������ڡ�JavaScript�߼�������� ��3�桷��21��
            if (typeof XMLHttpRequest != "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"
                        ],
                        i, len;

                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (ex) {
                            //skip
                        }
                    }
                }

                return new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw new Error("No XHR object available.");
            }
        }
    },
    //tab
    tab:function(id) {
        //��λ�ȡĳ����Ԫ���������Ԫ��
        var box = document.getElementById(id);
        var spans = box.getElementsByTagName('span');
        var lis = box.getElementsByTagName('li');


        //������
        //��һ��: �Ȱ��ϰ벿��ʵ��
        //Ⱥ����¼�  -- �����е�span���¼�
        //Ⱥ����¼�
        for(var i=0;i<spans.length;i++) {
            //���׷���  -- ����һ��һ������  --  ��ô�� -- �Զ�������
            spans[i].index=i;
            spans[i].onmouseover = function() {
                //����˼�� --  �����е�span��ΪĬ��״̬  --- Ȼ���ٽ���ǰ������ϵ�span��Ϊclass -- select
                for(var i=0;i<spans.length;i++) {
                    spans[i].className='';
                    lis[i].className='';
                }
                this.className='select';
                lis[this.index].className='select';
            }
        }

    },
    //�����
    random: function (begin, end) {
        return Math.floor(Math.random() * (end - begin)) + begin;
    }
}
//�ڿ����ʵ��������������ʹ�õ�ʹ�þͲ���ʵ������
$$ = new $$();

