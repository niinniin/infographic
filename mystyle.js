/**
 * Created by NinaYoda on 2016-09-20.
 */
/*$('button').each(function(){
    var lastClass = $(this).attr('class').split(' ').pop();
    $(this).nextAll('div').append("<a href='http://api.jquery.com/" + lastClass + "'>" + lastClass + "</a>");
});*/
$(document).ready(function(){
    $('.showaward').hide();
    $('.slidedown').hide();
    $('.slidedown2').hide();
    $('.english').hide();
    $('.german').hide();
    $('.poland').hide();
    $('.portugal').hide();
    $('.russian').hide();
    $('.japanese').hide();
    $('.french').hide();
});

var clickcounterPieChart = 0;
var clickcounterPieChart2 = 0;

$('.bytfarg').mouseover(function(){
   $(this).css('color','#f01e32');
});

$('.bytfarg').mouseout(function(){
    $(this).css('color','white');
});


$('#piechartchange').click(function() {
    clickcounterPieChart = clickcounterPieChart + 1;
    console.log(clickcounterPieChart);

    if (clickcounterPieChart %2 != 0) {
        $(this).attr("src", "Obrazki/piechartpart.png");
    }
    else
    {
        $(this).attr("src", "Obrazki/pie-chart-5.png");
    }
});


$('#piechartchange2').click(function() {
    clickcounterPieChart2 = clickcounterPieChart2 + 1;
    console.log(clickcounterPieChart2);

    if (clickcounterPieChart2 %2 != 0) {
        document.getElementById('piechartchange2').setAttribute("src", "Obrazki/piechartpartleft.png");

    }
    else
    {
        document.getElementById('piechartchange2').setAttribute("src", "Obrazki/pie-chart-5.png");
    }
});

$('#awardshoover').mouseover(function() {
    $('.showaward').fadeIn(3000);
});



$('#platforms').mouseover(function(){
   $('.slidedown').slideDown(2500);

    setTimeout(function(){

        $('.slidedown2').slideDown(1500);

    },1500);
});


$('#languages').mouseover(function(){
    $('.english').fadeIn(1500);

    setTimeout(function(){
       $('.german').fadeIn(1500)

        setTimeout(function(){
            $('.poland').fadeIn(1500)

            setTimeout(function(){
                $('.portugal').fadeIn(1500)
                setTimeout(function(){
                    $('.russian').fadeIn(1500)
                    setTimeout(function(){
                        $('.japanese').fadeIn(1500)
                        setTimeout(function(){
                            $('.french').fadeIn(1500)

                        },500)
                    },500);
                },500);
            },500);
        },500);
    },500);
});


$('#mapchange').mouseover(function(){
   document.getElementById('mapchange').setAttribute('src', 'Obrazki/mapapolskilokacje.jpg');

});

$('#mapchange').mouseleave(function(){
    document.getElementById("mapchange").setAttribute("src", "Obrazki/mapa%20polski.jpg");

});


document.getElementById("locationbig").onclick=function(){
    this.setAttribute("style","font-size:50px;color:white;");
};