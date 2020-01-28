// from data.js
var tableData = data;
//var date_filter;

//console.log(typeof tableData.datetime);


// Manipulating HTML Content

// Reference to table body

var tbody = d3.select("tbody");

//console.log(tbody.text())

// Looping through each Object in the whole data

tableData.forEach(each_object => 
{
    //console.log(each_object);

    // Appending a row to fill data for each object in the data using d3

    var row = tbody.append("tr");

    //looping through each object in the data to get all the (property: value) pairs in each object
    
    Object.entries(each_object).forEach(([object_property,object_value]) => 
    {
        //console.log(object_property,object_value);

        // Appending one cell for each of the values of each object

        var cell = row.append("td");

        /* 
        updating each cells text with table row values:
        
        "Datetime" "City" "State" "Country" "Shape" "DurationMinutes" "Comments"
        
        */ 

        cell.text(object_value);
    });

});

// Grabbing the reference for "Filter Button"

var filter_btn = d3.select("#filter-btn");

filter_btn.on("click",function(){

    var date_input = d3.select("#datetime");

   // console.log(date_input);

    var date_value = date_input.property("value");

  //console.log(date_value);

    

  //var date_filter = tableData.filter(dt => dt.datetime == str.match(/date_value/g));

  //console.log(date_filter);

   
  //Select the table

  
    date_value = date_value.trim()
    //var n = str.charCodeAt(str)

    var input_code = date_value.charCodeAt(date_value)

    //console.log(input_code);

    // checking for spl characters and alphabets


    //if ((date_value >=32 && date_value <=47) || (date_value >= 58 && date_value <= 64) || (date_value >=91 && date_value <=96) || ((date_value >=123 && date_value <=155))) 
    
    if ((input_code >=32 && input_code <=47) || (input_code >= 58 && input_code <= 64) || (input_code >=91 && input_code <=96) || (input_code >=123 && input_code <=155) || (date_value == "")) 
    {
      alert("Please enter Digits/Date string - special Characters & Spaces not allowed");
    }
    else if ((input_code >= 97 && input_code <= 122) || (input_code >= 65 && input_code <= 90))
     {
       alert("Please enter Digits/Date string -  Alphabets not allowed")
     }
      else
      {
         
        if ((input_code ==32))
        {
           date_value.trim()
        }
        
        tableData.forEach(dt =>{
           //console.log(dt.datetime);
           if(dt.datetime.includes(date_value)==true)
           {
              console.log(date_value)
              //console.log(dt.datetime);

              var date_filter = tableData.filter(dt => dt.datetime.match(date_value) == date_value);

              //console.log(date_filter);

               d3.select("tbody").remove()

              var table = d3.select('table')
              var tbody = table.append('tbody')
      
              date_filter.forEach(filter_object=> 
              {
                var row = tbody.append("tr");
      
                Object.entries(filter_object).forEach(([obj_prop,obj_val]) =>{
      
                var cell = row.append("td");
      
                cell.text(obj_val);
              });

              });
           }

          //if(dt.datetime.includes(date_value)== false)
         //if(dt.datetime.indexOf(date_value) == -1)

         //if(dt.datetime.search(date_value) == -1)
          
            //if(dt.datetime.includes(date_value)===false)
            //if (dt.datetime.match(date_value) !== date_value)
           // {
             // console.log("---------trial------------")
              //console.log(dt.datetime.search(date_value))

              //console.log(dt.datetime.indexOf(date_value))
              
              //console.log(`${date_value} not in Table Data`);
              //console.log("---------trial------------")
           // }
           //console.log(date_filter);
        });

      }
    
});


