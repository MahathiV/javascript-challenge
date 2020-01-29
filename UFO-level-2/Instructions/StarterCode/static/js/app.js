// from data.js
var tableData = data;

//console.log(typeof tableData.datetime);


// Manipulating HTML Content

// Reference to table body

var tbody = d3.select("tbody");

//console.log(tbody.text())

// Looping through each Object in the whole data

var date_arr =[]
var city_arr =[]
var state =[]
var country = []
var shape = []

tableData.forEach(each_object => 
{
    //console.log("------------datetime values-------------")
    //console.log(each_object.datetime);
    //console.log(typeof each_object.datetime);

    date_arr.push(each_object.datetime)
    city_arr.push(each_object.city)
    state.push(each_object.state)
    country.push(each_object.country)
    shape.push(each_object.shape)

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



// getting unique values to load in the drop down list

var date_unique  = d3.set(date_arr).values(); 
//console.log(date_unique)
  
    
var city_unique = d3.set(city_arr).values();


//console.log(city_unique)

var state_unique = d3.set(state).values();
var country_unique = d3.set(country).values();
var shape_unique = d3.set(shape).values();


// adding tags for dropdown list and labels for multi search criteria

var li_tag = d3.select("li")
li_tag.select("input").remove()

var select_tag = li_tag.append("select")

var ul_tag = d3.select(".list-group")

var li_tag1 = ul_tag.append("li").attr("class","filter list-group-item");


var city_label = li_tag1.append("label").attr("for","city").text("Enter City")
var select_tag1 = li_tag1.append("select").attr("id","selectcity")

var state_label = li_tag1.append("label").attr("for","state").text("Enter State")
var select_tag2 = li_tag1.append("select").attr("id","selectstate")

var country_label = li_tag1.append("label").attr("for","country").text("Enter Country")
var select_tag3 = li_tag1.append("select").attr("id","selectcountry")

var shape_label = li_tag1.append("label").attr("for","shape").text("Enter Shape")
var select_tag4 = li_tag1.append("select").attr("id","selectshape")

date_unique.forEach(dates =>{
  //console.log(dates);

  var option_tag = select_tag.attr("id","datetime").append("option")
   var value_attr = option_tag.attr("value",dates)
  value_attr.text(dates)
});


city_unique.forEach(cities =>{

  var option_tag = select_tag1.append("option")
  var value_attr = option_tag.attr("value",cities)
  value_attr.text(cities)

});

state_unique.forEach(st=>{

  var option_tag = select_tag2.append("option")
  var value_attr = option_tag.attr("value",st)
  value_attr.text(st)

})

country_unique.forEach(coun =>{
  var option_tag = select_tag3.append("option")
    var value_attr = option_tag.attr("value",coun)
    value_attr.text(coun)

});

shape_unique.forEach(sh =>{
    var option_tag = select_tag4.append("option")
    var value_attr = option_tag.attr("value",sh)
    value_attr.text(sh)
})


// Grabbing the reference for "Filter Button"

var filter_btn = d3.select("#filter-btn");

filter_btn.on("click",function(){

    var date_input = d3.select("#datetime");
    var date_value = date_input.property("value");

    var city_input = d3.select("#selectcity")
    var city_value = city_input.property("value")


    var state_input = d3.select("#selectstate")
    var state_value = state_input.property("value")

    var country_input =d3.select("#selectcountry")
    var country_value = country_input.property("value")

    var shape_input = d3.select("#selectshape")
    var shape_value = shape_input.property("value")

    tableData.forEach(dt =>{

        //var date_filter = tableData.filter(dt => dt.datetime.match(date_value) == date_value);
        var overall_filter = tableData.filter(dt => dt.datetime.match(date_value) == date_value || dt.city.match(city_value)== city_value|| dt.state.match(state_value)==state_value || dt.state.match(country_value)==country_value ||dt.state.match(shape_value)==shape_value);

        //console.log(overall_filter);

        d3.select("tbody").remove()

        var table = d3.select('table')
        var tbody = table.append('tbody')
        overall_filter.forEach(filter_object=>   
            {
          var row = tbody.append("tr");
      
          Object.entries(filter_object).forEach(([obj_prop,obj_val]) =>{
      
            var cell = row.append("td");
            cell.text(obj_val);
            });

        });
        
      });
});


