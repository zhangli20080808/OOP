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
$(document).ready(function(){

    //�����Ʒ����
    function Product(){
        this.name='HM���з���ɽ��'
        this.description='�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������'
        this.normalPrice=144
        this.groupbuyPrice=120
        this.buySum=100;
        this.images=[
            {small:'images/s11.jpg',big:'images/s11.jpg'},
            {small:'images/s12.jpg',big:'images/s12.jpg'},
            {small:'images/s13.jpg',big:'images/s13.jpg'}
        ]
    }
    Product.prototype={
        /*��ͨ����*/
        buy:function(){},
        bindImage:function(images){
            var str=''
            for(var i= 0,len=images.length;i<len;i++) {
                str+='<li>'
                str+='<img class="etalage_thumb_image" src="'+ images[i].small+'" class="img-responsive" />'
                str+='<img class="etalage_source_image" src="'+ images[i].small+'" class="img-responsive" />'
                str+='</li>'
            }
            $('#etalage').html(str)

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
        bindDOM:function(product){
            /*��Ԫ��*/
            $('#pname').html(product.name)
            $('#description').html(product.description)
            $('#price').html(product.normalPrice)
            $('#groupPrice').html(product.groupbuyPrice)
            $('#buyCount').html(product.buySum)
            product.bindImage(product.images)

        },
        bindEvents:function(product){
        /*���¼�*/
        $('#btnaddcart').onclick=function(){

        }
        $('#btnbuy').onclick=function(){}
    },
        /*�Ź�*/
        groupBuy:function(){},
        /*��ӵ����ﳵ*/
        addCart:function(){

        }
    }

    /*���幺�ﳵ����*/
    function Cart(){
        this.products=[{image:'',price:300,name:'Ь��'}]
        this.sum=3
        this.allPrice=2000
    }
    Cart.prototype={
        /*����*/
        calcalate:function(){},
        bindHtmls:function(products){

        }
    }

    /*��Ʒ���*/
    /*ʵ����*/
    var product =  new Product()
    /*�����ajax,�ӷ�������ȡ���ݺ�ֵ������*/
    product.name='HM���¿�ʽ��ɽ�˶���'
    product.bindDOM()
    product.bindEvents()
});