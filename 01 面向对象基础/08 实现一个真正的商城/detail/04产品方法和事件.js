//ҳ����Ч
//������
$(document).ready(function(c) {
    $('.alert-close').on('click', function(c){
        $('.message').fadeOut('slow', function(c){
            $('.message').remove();
        });
    });
});

$(document).ready(function(c) {
    $('.alert-close1').on('click', function(c){
        $('.message1').fadeOut('slow', function(c){
            $('.message1').remove();
        });
    });
});

$(document).ready(function(c) {
    $('.alert-close2').on('click', function(c){
        $('.message2').fadeOut('slow', function(c){
            $('.message2').remove();
        });
    });
});

//tab���
$(document).ready(function () {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true   // 100% fit in a container
    });
});

/*�����Ĺرհ�ť*/
$(document).ready(function () {
    $('#activator').click(function(){
        $('#box').animate({'left':'0px'},500);
    });
    $('#boxclose').click(function(){
        $('#box').animate({'left':'-2300px'},500);
    });
});

$(document).ready(function(){

    //Hide (Collapse) the toggle containers on load
    $(".toggle_container").hide();

    //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
    $(".trigger").click(function(){
        $(this).toggleClass("active").next().slideToggle("slow");
        return false; //Prevent the browser jump to the link anchor
    });

});









//ҳ���ҵ���߼�


/*�������*/
//�����Ʒ����
function Product(){
    this.name='HM���з���ɽ��'
    this.description='�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������'
    this.normalPrice=144
    this.groupbuyPrice=120
    this.buySum=100;
    this.images=[
        {small:'../images/s11.jpg',big:'../images/s11.jpg'},
        {small:'../images/s12.jpg',big:'../images/s12.jpg'},
        {small:'../images/s13.jpg',big:'../images/s13.jpg'}
    ]
}
Product.prototype={
    /*��ͨ����*/
    buy:function(){},
    bindDOMImage:function(){
        var str=''
        for(var i= 0,len=this.images.length;i<len;i++) {
            str+='<li>'
            str+='<img class="etalage_thumb_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='<img class="etalage_source_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='</li>'
        }
        $('#etalage').html(str)

        /*jquery���ʵ�ֵĻõ�Ƭ��Ч*/
        $('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,

            show_hint: true,
            click_callback: function(image_anchor, instance_id){
                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
            }
        });
        // This is for the dropdown list example:
        $('.dropdownlist').change(function(){
            etalage_show( $(this).find('option:selected').attr('class') );
        });
    },
    bindDOMDetail:function(){
        /*��Ԫ��*/
        $('#pname').html(this.name)
        $('#description').html(this.description)
        $('#price').html(this.normalPrice)
        $('#groupPrice').html(this.groupbuyPrice)
        $('#buyCount').html(this.buySum)
    },
    /*�Ź�*/
    groupBuy:function(){},
    /*��ӵ����ﳵ*/
    addCart:function(){

    }
}

/*���幺�ﳵ����*/
function Cart(){
    this.products=[]
    this.sum=3
    this.allPrice=2000
}
Cart.prototype={
    bindBasic:function(){
        //��
        $('.cartsum').html(this.getSum())
        $('#cartprice').html(this.getAllPrice())
    },
    //�󶨲�Ʒ�б�,ÿ�ε�������ﳵִ�еķ���
    bindList:function(){
        var str=''
        for(var i= 0,len=this.products.length;i<len;i++){
            str+='<div class="cart_box">'
            str+='<div class="message">'
            str+=' <div class="alert-close"> </div>'
            str+=' <div class="list_img"> <img src="'+this.products[i].images[0].small+'" class="img-responsive" alt=""/> </div>'
            str+=' <div class="list_desc"><h4><a href="#">'+this.products[i].name+'</a></h4><span class="actual">'+ this.products[i].groupbuyPrice+'</span></div>'
            str+=' <div class="clearfix"></div>'
            str+='  <div class="clearfix"></div>'
            str+='  </div>'
            str+='   </div>'
        }
        $('.shopping_cart').html(str)

    },
    /*����*/
    calcalate:function(){},
    /*��ȡ��Ʒ����*/
    getSum:function(){
        this.sum=this.products.length;
        return this.sum;
    },
    /*��ȡ��Ʒ�ܼ�*/
    getAllPrice:function(){
        for(var i= 0,len=this.products.length;i<len;i++){
            this.allPrice+=this.products[i].groupbuyPrice;
        }
        return this.allPrice;
    }

}


$(document).ready(function(){

    /*��ʼ���*/
    /*��Ʒ���*/
    /*ʵ����*/
    var product =  new Product()
    product.name='HM���з���ɽ��33'
    product.description='�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������'
    product.normalPrice=144
    product.groupbuyPrice=120
    product.buySum=100;
    product.images=[
        {small:'../images/s11.jpg',big:'../images/s11.jpg'},
        {small:'../images/s12.jpg',big:'../images/s12.jpg'},
        {small:'../images/s13.jpg',big:'../images/s13.jpg'}
    ]
    /*ʹ�ö����еķ�������*/
    product.bindDOMDetail()
    product.bindDOMImage()

    /*���¼�*/
    $('#btnaddcart').click(function(){
        /*���ﳵ����һ����Ʒ*/
        console.log('12222')
        cart.products.push(product)
        ///*���¹��ﳵ - ���°󶨹��ﳵ*/
        /*�������װ������Ϳ��ܲ��������ظ�*/
        cart.bindBasic()
        cart.bindList()
        $(window).scrollTop(0);
    });





    /*ʵ�����ﳵ*/
    var cart =  new Cart()
    cart.sum=3
    cart.allPrice=2000

    /*���蹺�ﳵ���Ѿ���������Ʒ*/
    cart.products.push(product)
    cart.products.push(product)
    cart.products.push(product)

    /*ʹ�ö����еķ�������*/
    cart.bindBasic()
    cart.bindList()


});

