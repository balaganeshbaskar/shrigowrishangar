
function gettingJSON()
{
    // document.write("jquery loaded");

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Hosur,TN,356&units=metric&APPID=8c2f3944cd016e3943efdcf69c7c7e26",function(json){

        // $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=12.74&lon=77.82&units=metric&APPID=8c2f3944cd016e3943efdcf69c7c7e26",function(json){


        var data = json;

        // console.log(document.getElementById('temp_data').innerHTML);
        // console.log(data);
        // console.log(data["main"]["temp_max"]);
        // console.log(data["main"]["temp_min"]);


        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        const d = new Date();
        let day = d.getDay();
        // console.log(days[day]);

        var tomorrow = 0;

        if(day == 6)
        {
            tomorrow = 0;
        }
        else
        {
            tomorrow = day + 1;
        }
        // console.log(day + "-" + tomorrow);


        var output1 = days[day]+"&nbsp;&nbsp;"+ Math.round(data["main"]["temp"])+"\xB0C";
        document.getElementById('temp_data').innerHTML = output1;

        // var output2 = days[tomorrow]+"&nbsp;&nbsp;"+ Math.round(data["main"]["temp"])+"\xB0C";
        // document.getElementById('temp_data').innerHTML = output1+"&emsp; &emsp;"+output2;


    });

}



function nav_active(page_name)
{
    if(page_name == 'home')
    {
        // alert("Home page");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');




        document.getElementById("nav1").classList.add('active_nav_link');
        document.getElementById("footer1").classList.add('active_nav_link');
    }
    else if(page_name == 'about_us')
    {
        // alert("About Us");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("nav2").classList.add('active_nav_link');
        document.getElementById("footer2").classList.add('active_nav_link');
        
    }
    else if(page_name == 'rooms')
    {
        // alert("About Us");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("navbarDropdown").classList.add('active_nav_link');
        document.getElementById("footer3").classList.add('active_nav_link');
        
    }
    else if(page_name == 'restaurant')
    {
        // alert("About Us");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("nav4").classList.add('active_nav_link');
        document.getElementById("footer4").classList.add('active_nav_link');
        
    }
    else if(page_name == 'gallery')
    {
        // alert("About Us");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("nav5").classList.add('active_nav_link');
        document.getElementById("footer5").classList.add('active_nav_link');
        
    }
    else if(page_name == 'contact_us')
    {
        // alert("About Us");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("nav6").classList.add('active_nav_link');
        document.getElementById("footer6").classList.add('active_nav_link');
        
    }
}


function tabs_toggle(type)
{   
    document.getElementById("standard").hidden = true;
    document.getElementById("balcony").hidden = true;
    document.getElementById("deluxe").hidden = true;
    document.getElementById("superior").hidden = true;
    document.getElementById("grand_superior").hidden = true;

    document.getElementById("standard_caret").hidden = true;
    document.getElementById("balcony_caret").hidden = true;
    document.getElementById("deluxe_caret").hidden = true;
    document.getElementById("superior_caret").hidden = true;
    document.getElementById("grand_superior_caret").hidden = true;
    // background-image: linear-gradient(#6560b4, #9089e4);
    // var c = "black";
    // var d = "#212529";

    // var a =  'linear-gradient(to right, #6560b4, #9089e4)';
    // var b = "white";

    // document.getElementById("customer_btn").style.backgroundColor = '';
    // document.getElementById("customer_btn").style.color = b;
    // document.getElementById("customer_btn").style.backgroundImage  = a;
    // document.getElementById("invoice_btn").style.backgroundColor = '';
    // document.getElementById("invoice_btn").style.color = b;
    // document.getElementById("invoice_btn").style.backgroundImage  = a;
    // document.getElementById("quotes_btn").style.backgroundColor = '';
    // document.getElementById("quotes_btn").style.color = b;
    // document.getElementById("quotes_btn").style.backgroundImage  = a;
    // document.getElementById("dc_btn").style.backgroundColor = '';
    // document.getElementById("dc_btn").style.color = b;
    // document.getElementById("dc_btn").style.backgroundImage  = a;

    if(type == 'standard')
    {
        // document.getElementById("customer").hidden = false;
        // document.getElementById("invoice").hidden = true;
        // document.getElementById("quotation").hidden = true;
        // document.getElementById("dc").hidden = true;

        // document.getElementById("customer_btn").style.backgroundColor = b;
        // document.getElementById("customer_btn").style.backgroundImage  = '';
        // document.getElementById("customer_btn").style.color = c;   

        document.getElementById("standard").hidden = false;
        document.getElementById("standard_caret").hidden = false;
    }
    else if(type == 'balcony')
    {
        // document.getElementById("customer").hidden = false;
        // document.getElementById("invoice").hidden = true;
        // document.getElementById("quotation").hidden = true;
        // document.getElementById("dc").hidden = true;

        // document.getElementById("customer_btn").style.backgroundColor = b;
        // document.getElementById("customer_btn").style.backgroundImage  = '';
        // document.getElementById("customer_btn").style.color = c;   

        document.getElementById("balcony").hidden = false;
        document.getElementById("balcony_caret").hidden = false;
    
    }
    else if(type == 'deluxe')
    {
        // document.getElementById("customer").hidden = false;
        // document.getElementById("invoice").hidden = true;
        // document.getElementById("quotation").hidden = true;
        // document.getElementById("dc").hidden = true;

        // document.getElementById("customer_btn").style.backgroundColor = b;
        // document.getElementById("customer_btn").style.backgroundImage  = '';
        // document.getElementById("customer_btn").style.color = c;   

        document.getElementById("deluxe").hidden = false;
        document.getElementById("deluxe_caret").hidden = false;
    
    }
    else if(type == 'superior')
    {
        // document.getElementById("customer").hidden = false;
        // document.getElementById("invoice").hidden = true;
        // document.getElementById("quotation").hidden = true;
        // document.getElementById("dc").hidden = true;

        // document.getElementById("customer_btn").style.backgroundColor = b;
        // document.getElementById("customer_btn").style.backgroundImage  = '';
        // document.getElementById("customer_btn").style.color = c;   

        document.getElementById("superior").hidden = false;
        document.getElementById("superior_caret").hidden = false;
    
    }
    else if(type == 'grand_superior')
    {
        // document.getElementById("customer").hidden = false;
        // document.getElementById("invoice").hidden = true;
        // document.getElementById("quotation").hidden = true;
        // document.getElementById("dc").hidden = true;

        // document.getElementById("customer_btn").style.backgroundColor = b;
        // document.getElementById("customer_btn").style.backgroundImage  = '';
        // document.getElementById("customer_btn").style.color = c;   

        document.getElementById("grand_superior").hidden = false;
        document.getElementById("grand_superior_caret").hidden = false;
    }

}
