---
---

// Initialize all the portfolio items
let items = {};
{% for item in site.data.portfolio %}
    items[{{item.id}}] = {{item.category | jsonify }} ;
{% endfor %}

function preselectCategory(category){
    console.log(`Preselecting ${category}`);

    // document.getElementById(`${category}`).click();
    categories = {{site.data.settings.portfolio-categories | jsonify}};

    if (categories.includes(category)){
        filterByCategory(category);
    }
}

function filterByCategory(selectedCategory){

    
    console.log(`Selected category "${selectedCategory}"`);
        
    // for (let index = 0; index < Object.keys(items).length; index++) {
    //     let itemDiv = document.getElementById(`${index+1}`);

    //     if (items[index+1] != selectedCategory) {
    //         // Debugging
    //         console.log(`Card ${index+1} is made from ${items[index+1]}, not ${selectedCategory}. Hiding...`);
    //         itemDiv.style.display = "none";        
    //     }
    // }

    for (let index = 0; index < Object.keys(items).length; index++) {
        let itemDiv = document.getElementById(`${index+1}`);

        itemDiv.style.display =
        (items[index+1] == selectedCategory ) 
          ? 'flex' 
          : 'none';
    }
}