window.onload =function(){
    var news = new News()
    news.title='��Ѷ��ɾ���'
    news.comments=200
    news.date='2015-09-09'
    news.author='�����'
    news.source='������'
    news.content='��������������'
    var dom = document.getElementById('content')
    news.bindDetailDom(dom)
}