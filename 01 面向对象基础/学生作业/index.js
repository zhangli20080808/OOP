window.onload =function(){
    var data=[
        {title:'��Ѷ��ɾ���',comments:100,source:'������',date:'2014-09-09',image:'images/head.jpg',introduce:'������+΢�š����ֻ��ǡ���Ѹ+΢��+��������֮�ھ�����֮����Ѷ���̣����Ǻ����������ģ��Ǵ�һ�η����̵Ļ�'},
        {title:'��Ѷ��ɾ���',comments:100,source:'������',date:'2014-09-09',image:'images/head.jpg',introduce:'������+΢�š����ֻ��ǡ���Ѹ+΢��+��������֮�ھ�����֮����Ѷ���̣����Ǻ����������ģ��Ǵ�һ�η����̵Ļ�'},
        {title:'��Ѷ��ɾ���',comments:100,source:'������',date:'2014-09-09',image:'images/head.jpg',introduce:'������+΢�š����ֻ��ǡ���Ѹ+΢��+��������֮�ھ�����֮����Ѷ���̣����Ǻ����������ģ��Ǵ�һ�η����̵Ļ�'},
        {title:'��Ѷ��ɾ���',comments:100,source:'������',date:'2014-09-09',image:'images/head.jpg',introduce:'������+΢�š����ֻ��ǡ���Ѹ+΢��+��������֮�ھ�����֮����Ѷ���̣����Ǻ����������ģ��Ǵ�һ�η����̵Ļ�'},
        {title:'��Ѷ��ɾ���',comments:100,source:'������',date:'2014-09-09',image:'images/head.jpg',introduce:'������+΢�š����ֻ��ǡ���Ѹ+΢��+��������֮�ھ�����֮����Ѷ���̣����Ǻ����������ģ��Ǵ�һ�η����̵Ļ�'},
        {title:'��Ѷ��ɾ���',comments:100,source:'������',date:'2014-09-09',image:'images/head.jpg',introduce:'������+΢�š����ֻ��ǡ���Ѹ+΢��+��������֮�ھ�����֮����Ѷ���̣����Ǻ����������ģ��Ǵ�һ�η����̵Ļ�'},
        {title:'��Ѷ��ɾ���',comments:100,source:'������',date:'2014-09-09',image:'images/head.jpg',introduce:'������+΢�š����ֻ��ǡ���Ѹ+΢��+��������֮�ھ�����֮����Ѷ���̣����Ǻ����������ģ��Ǵ�һ�η����̵Ļ�'}
    ]
    var str=''
    var container  = document.getElementById('container')

    for(var i= 0,len=data.length;i<len;i++) {
        var news = new News()
        news.title='��Ѷ��ɾ���'
        news.comments=data[i].comments
        news.date=data[i].date
        news.image=data[i].image
        news.source=data[i].source
        news.introduce=data[i].introduce
        str+= news.bindListDOM()
    }
    container.innerHTML=str;
}