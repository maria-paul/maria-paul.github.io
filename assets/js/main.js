---
---

// Initialize all the portfolio items
let items = {};
{% assign id = 1 %}
{% for item in site.data.portfolio %}
    {% assign id = id | plus:1 %}
    items[{{id}}] = {{item.category | jsonify }} ;
{% endfor %}

function preselectCategory(category){
    console.log(`Preselecting ${category}`);

    categories = {{site.data.settings.portfolio-categories | jsonify}};

    // Prefilter portfolio items only if the category set in 
    // settings exists
    if (categories.includes(category)){
        filterByCategory(category);
    }
}

function filterByCategory(selectedCategory){

    
    console.log(`Selected category "${selectedCategory}"`);
        

    for (let index = 0; index < Object.keys(items).length; index++) {
        let itemDiv = document.getElementById(`${index+1}`);

        // If item is in selected category set display to flex
        // otherwise set to none
        itemDiv.style.display =
        (items[index+1] == selectedCategory ) 
          ? 'flex' 
          : 'none';
    }
}