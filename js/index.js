
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