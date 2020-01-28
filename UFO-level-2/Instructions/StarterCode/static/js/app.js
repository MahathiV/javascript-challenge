// from data.js
var tableData = data;

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

tableData.forEach(date_objects =>{
  // var option_tag = select_tag.append("option")
  var option_tag = select_tag.attr("id","datetime").append("option")
 

  //var value_attr = option_tag.attr("value",date_objects.datetime).text(date_objects.datetime);

  var value_attr = option_tag.attr("value",date_objects.datetime)
  value_attr.text(date_objects.datetime)

    //var trail = d3.select("input").attr("id","datetime")

    //var placeholder = trail.attr("placeholder","------select date ------").text()

    //console.log(placeholder);


  if (city_label.attr("for")=="city")
  {
    
    //var option_tag = select_tag1.attr("id","selectcity").append("option")
    var option_tag = select_tag1.append("option")
    var value_attr = option_tag.attr("value",date_objects.city)
    value_attr.text(date_objects.city)
  };

  if (state_label.attr("for")=="state")
  {
    var option_tag = select_tag2.append("option")
    var value_attr = option_tag.attr("value",date_objects.state)
    value_attr.text(date_objects.state)
  };
  
  if (country_label.attr("for")=="country")
  {
    var option_tag = select_tag3.append("option")
    var value_attr = option_tag.attr("value",date_objects.country)
    value_attr.text(date_objects.country)
  };

  
  if (shape_label.attr("for")=="shape")
  {
    
    //var option_tag = select_tag2.attr("id","selectstate").append("option")
    var option_tag = select_tag4.append("option")
    var value_attr = option_tag.attr("value",date_objects.shape)
    value_attr.text(date_objects.shape)
  };
  
});


// Grabbing the reference for "Filter Button"

var filter_btn = d3.select("#filter-btn");

//var date_selected = d3.select("select").select

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


