//��Ʒ����
/*���������ʹ�ö�������Ժͷ�����this�����������ʹ�ã���ʵ���������õ��﷨*/
function Product() {
    /*���� ��Ϊ*/
    this.name ='';
    this.price='';
    this.description = '';
    this.youhuijia='';
    this.zhekou = ''
    this.sales = ''
    this.image=''
}
Product.prototype={
    bindDom:function(){
        var str=''
        str+='<dl>'
            str+='<dt><a><img src="'+this.image+'" width="384" height="225" /></a></dt>'
            str+='<dd>'
                str+='<span><a><em>'+this.zhekou+'��/</em>'+this.name+'</a></span>'
            str+='</dd>'
            str+='<dd class="price">'
                str+='<em>��'+this.price+'</em>'
                str+='<del>��'+this.youhuijia+'</del>'
                str+='<i>������'+this.sales+'</i>'
            str+='</dd>'
        str+='</dl>'
        return str;
    },
    bindEvents:function(){

    }
}

/*���ľ���� -- ����ɶ��Լ���*/
window.onload=function() {
  /*��������ajax��ȡ��json���� -- �������Ǻ�̨���������*/


    /*ʵ��1*/
    var product1 = new Product()
    product1.name = 'SKII'
    product1.price = 1111
    product1.youhuijia = 1000
    product1.sales = 300
    product1.zhekou = 3.5
    product1.image = 'img/boutque10_r2_c2.jpg'

    /*ʵ��2*/
    var product2 = new Product()
    product2.name = '������'
    product2.price = 1111
    product2.youhuijia = 1000
    product2.sales = 300
    product2.zhekou = 3.5
    product2.image = 'img/boutque10_r2_c2.jpg'

    /*ʵ��3*/
    var product3 = new Product()
    product3.name = '��ޢ'
    product3.price = 1111
    product3.youhuijia = 1000
    product3.sales = 300
    product3.zhekou = 3.5
    product3.image = 'img/boutque10_r2_c2.jpg'



    /*��ʾ�ж����Ʒ  ������Ҫ������ʵ��*/
    var products = [product1,product2,product3]

    /*ǰ�˴���*/
    /*ǰ��̨������Ӱ�죬���ǲ��صȴ������Ա����������*/
    var str=''
    for(var i = 0,len=products.length;i<len;i++) {
        str+= products[i].bindDom()
    }
    var container = document.getElementById('container')
    container.innerHTML=str
}

