day1 = day = (new Date).getDate()
month1 = month = (new Date).getMonth() + 1
year1 = year = (new Date).getYear() + 1900
forwardVar = false

monthPub = 'next'

function setDate() {
  document.getElementById('date').innerText = `${month}/${day}/${year}`
}

setDate()


function getId() {

  idURL = `https://hcpsmenus.com/index.php?sid=1503510605320&page=menus&sm=${month}&sy=${year}#clicktoscroll`

  console.log(idURL)

}

getId()

id = "62e808207057ecb2711acecf"
monthOfId = 9



function getURL() {
  url = `https://api.isitesoftware.com/graphql?query=%0A++++++++++++{%0A++++++++++++++++%0A++++++++++++++++menu(id:%22${id}%22)+{%0A++++++++++++++++++++id%0A++++++++++++++++++++bg%0A++++++++++++++++++++weeksForCycle%0A++++++++++++++++++++weekLength%0A++++++++++++++++++++isTwoPages%0A++++++++++++++++++++month%0A++++++++++++++++++++year%0A++++++++++++++++++++cachedFontSize%0A++++++++++++++++++++wrapping%0A++++++++++++++++++++menuType+{%0A++++++++++++++++++++++++id%0A++++++++++++++++++++++++name%0A++++++++++++++++++++++++formats%0A++++++++++++++++++++++++listMenuIDs,%0A++++++++++++++++++++++++sitePaths+{%0A++++++++++++++++++++++++++sites+{%0A++++++++++++++++++++++++++++id,%0A++++++++++++++++++++++++++++name%0A++++++++++++++++++++++++++}%0A++++++++++++++++++++++++}%0A++++++++++++++++++++}%0A++++++++++++++++++++items+{%0A++++++++++++++++++++++++day%0A++++++++++++++++++++++++importSrcId%0A++++++++++++++++++++++++month%0A++++++++++++++++++++++++year%0A++++++++++++++++++++++++portion_size%0A++++++++++++++++++++++++nutrients+{%0A++++++++++++++++++++++++++++calories%0Atotal_fat%0Atrans_fat%0Asat_fat%0Acholesterol%0Asodium%0Acarbs%0Adietary_fiber%0Asugar%0Aadded_sugar%0Aprotein%0Airon%0Acalcium%0Apotassium%0Avita_iu_re%0Avita_iu%0Avitc%0Avitd%0A%0A++++++++++++++++++++++++}%0A++++++++++++++++++++++++product+{%0A++++++++++++++++++++++++++++%0A%0Aid%0Aname%0Arating_average%0Arating_count%0Aallergen_dairy%0Aallergen_egg%0Aallergen_fish%0Aallergen_gluten%0Aallergen_milk%0Aallergen_peanut%0Aallergen_pork%0Aallergen_shellfish%0Aallergen_soy%0Aallergen_sesame%0Aallergen_treenuts%0Aallergen_vegetarian%0Aallergen_wheat%0Aallergen_other%0AcustomAllergens%0Aallow_online_ordering%0Abeans_peas_legumes%0Acategory%0Aenabled%0Afood_group%0Afruit%0Afruit_juice%0Agrains%0Agreen_vegetable%0Ahide_on_calendars%0Ahide_on_mobile%0Aimage_url1%0Aimage_url2%0Ais_ancillary%0Along_description%0Ameal%0Ameat%0Amilk%0Aother_vegetable%0Apdf_url%0Aportion_size%0Aportion_size_unit%0Aprice%0Aprod_allergens%0Aprod_calcium%0Aprod_calories%0Aprod_carbs%0Aprod_cholesterol%0Aprod_dietary_fiber%0Aprod_gram_weight%0Aprod_iron%0Aprod_mfg%0Aprod_protein%0Aprod_sat_fat%0Aprod_sodium%0Aprod_total_fat%0Aprod_trans_fat%0Aprod_vita_iu%0Aprod_vita_re%0Aprod_vitc%0Aproduct_fullname%0AproductID%0AproviderProductID%0Ared_vegetable%0Astarchy_vegetable%0Asugar%0Atrash+%0Atotal_gram_weight%0Avegetable%0Avisible_month_cal%0Awhole_grain+%0Ahide_on_calendars+%0Ahide_on_web_menu_view%0Aglobal%0ASID%0AmealsPlusCustomAllergens%0AmealsPlusCustomAttributes%0A+++%0A++++++++++++++++++++++++}%0A++++++++++++++++++++++++hidden%0A++++++++++++++++++++}%0A++++++++++++++++++++previousMonthPublished+{+id+}%0A++++++++++++++++++++nextMonthPublished+{+id+}%0A++++++++++++++++++++OnlineMenuDesignSettings+{%0A++++++++++++++++++++++++customAllergens+{%0A++++++++++++++++++++++++++++field%0A++++++++++++++++++++++++++++img%0A++++++++++++++++++++++++++++label%0A++++++++++++++++++++++++++++tooltip%0A++++++++++++++++++++++++++++showAllergenIconOnMenu%0A++++++++++++++++++++++++}%0A++++++++++++++++++++++++mealsPlusCustomAllergens+{%0A++++++++++++++++++++++++++field%0A++++++++++++++++++++++++++img%0A++++++++++++++++++++++++++label%0A++++++++++++++++++++++++++tooltip%0A++++++++++++++++++++++++++showIconOnMenu%0A++++++++++++++++++++++++++mealsPlusId%0A++++++++++++++++++++++++}%0A++++++++++++++++++++++++mealsPlusCustomAttributes+{%0A++++++++++++++++++++++++++++field%0A++++++++++++++++++++++++++++img%0A++++++++++++++++++++++++++++label%0A++++++++++++++++++++++++++++tooltip%0A++++++++++++++++++++++++++++showIconOnMenu%0A++++++++++++++++++++++++++++mealsPlusId%0A++++++++++++++++++++++++}%0A++++++++++++++++++++++++nutrientsDisabled%0A++++++++++++++++++++++++allergenFilterEnabled%0A++++++++++++++++++++++++showPriceOnPopovers%0A++++++++++++++++++++++++disableAllergen%0A++++++++++++++++++++++++showAllergens%0A++++++++++++++++++++++++sid%0A++++++++++++++++++++++++disableNutritionReportCard++++++++++++++++++++++++%0A++++++++++++++++++++++++categoryToBold%0A++++++++++++++++++++++++onlineMealAppEnabled%0A++++++++++++++++++++++++onlineMealAppGraphic%0A++++++++++++++++++++++++onlineMealAppUrl%0A++++++++++++++++++++++++onlinePaymentProviderEnabled%0A++++++++++++++++++++++++onlinePaymentProviderGraphic%0A++++++++++++++++++++++++onlinePaymentProviderUrl%0A++++++++++++++++++++++++showAllergenIconOnMenu%0A++++++++++++++++++++++++web_menu_view_header_image_url%0A++++++++++++++++++++++++automaticItemSorting%0A++++++++++++++++++++++++hideCategoryHeaders%0A++++++++++++++++++++++++disableChainedSelects%0A++++++++++++++++++++++++dropdownMenuExcludeSchools%0A++++++++++++++++++++++++hideAllergensInNutritionReportCard%0A++++++++++++++++++++++++ratingDisableComments%0A++++++++++++++++++++++++disableTranslateWidget%0A++++++++++++++++++++}%0A++++++++++++++++}%0A++++++++++++}%0A++++++++++++`

  fetch(url)
    .then((response) => response.json())
    .then((json) => preDoStuff(json));
}


function setStorage() {
  
  if (hasStorage == false) {
  tempFood = todaysFoodArray.slice()
  tempFood.unshift([month, day, year])
  localStorage.setItem('oldSave', JSON.stringify(tempFood))
  }
}

function doStuffLol() {

  
  
  setStorage()
  

  document.getElementById('hi').innerText = ""

  todaysFoodArray.forEach((element) => {
    document.getElementById('hi').innerText += element + "\n"
  })

  if (todaysFoodArray.length == 0) {
    document.getElementById('hi').innerText = "No food found for today"
  }
}

if (!!localStorage.getItem('oldSave')) {
  firstArray = JSON.parse(localStorage.getItem('oldSave'))[0]
  if (firstArray[0] == month1 && firstArray[1] == day1 && firstArray[2] == year1) {
    hasStorage = true
  } else {
    firstArray = []
    hasStorage = false
  }
} else {
  firstArray = []
  hasStorage = false
}

console.log(day)
if (firstArray[0] == month && firstArray[1] == day && firstArray[2] == year) {
  todaysFoodArray = JSON.parse(localStorage.getItem('oldSave')).slice(1);
  doStuffLol()
} else {
  getURL()
}

function preDoStuff(jsonVar) {

  
  if (monthOfId == month) {
    doStuff(jsonVar)
  } else if (monthOfId != month) {
    if (monthPub == 'next'){
      id = jsonVar.data.menu.nextMonthPublished.id
      monthOfId = (monthOfId) % 12 + 1
    } else {
      console.log(monthOfId,month)
      console.log(jsonVar)
      id = jsonVar.data.menu.previousMonthPublished.id
      monthOfId = monthOfId == 1 ? 12 : monthOfId-1
    }
    
    getURL()
  } else {
    
  }

}

function doStuff(jsonVar) {
  json = jsonVar;
  items = json.data.menu.items

  foodArray = new Array()

  items.forEach((element) => {
    let tempArray = new Array()
    tempArray.push(element.day)
    tempArray.push(element.product.name)
    foodArray.push(tempArray)
  })





  todaysFoodArray = new Array()

  foodArray.forEach((element) => {
    if (element.includes(day)) {
      todaysFoodArray.push(element[1])
    }
  })



  doStuffLol()

}


Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


function setDateFromDate() {

  day = nextDate.getDate()
  month = nextDate.getMonth() + 1
  year = nextDate.getYear() + 1900
    
}

function nextPage() {

  forwardVar = true
  monthPub = 'next'
  document.getElementById('hi').innerText = "Food loading..."
  nextDate = (new Date(`${month} ${day}, ${year}`)).addDays(1)
  setDateFromDate()
  setDate()
  if (firstArray[0] == month && firstArray[1] == day && firstArray[2] == year) {
  todaysFoodArray = JSON.parse(localStorage.getItem('oldSave')).slice(1);
  doStuffLol()
  } else {
  getURL()
  }
  
}

function lastPage() {

  if(forwardVar == true) {
  monthPub = 'previous'
  } else {
    monthPub = 'next'
    forwardVar = true
  }
  
  document.getElementById('hi').innerText = "Food loading..."
  nextDate = (new Date(`${month} ${day}, ${year}`)).addDays(-1)
  setDateFromDate()
  setDate()
  if (firstArray[0] == month && firstArray[1] == day && firstArray[2] == year) {
  todaysFoodArray = JSON.parse(localStorage.getItem('oldSave')).slice(1);
  doStuffLol()
  } else {
  getURL()
  }
  
}

document.getElementById('next').onclick = nextPage
document.getElementById('last').onclick = lastPage
