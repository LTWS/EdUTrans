var checkZH = /\/zh\/{1}/;
var holiday = false;
var holiday = [[1,1],[2,8],[2,9],[2,10],[3,25],[3,26],[3,28],[4,4],[5,2],[5,14],[6,9],[7,1],[9,16],[10,1],[10,10],[12,26],[12,27]];
var holidaydescription = [["一月一日","農曆年初一","農曆年初二","農曆年初三","耶穌受難節","耶穌受難節翌日","復活節星期一","清明節","勞動節翌日","佛誕","端午節","香港特別行政區成立紀念日","中秋節翌日","國慶日","重陽節翌日","聖誕節後第一個周日","聖誕節後第二個周日"],
                            ["The first day of January","Lunar New Year's Day","The second day of Lunar New Year","The third day of Lunar New Year","Good Friday","The day following Good Friday","Easter Monday","Ching Ming Festival","The day following the Labour Day","The Birthday of the Buddha","Tuen Ng Festival","Hong Kong Special Administrative Region Establishment Day","The day following the Chinese Mid-Autumn Festival","National Day","The day following the Chung Yeung Festival","The first weekday after Christmas Day","The second weekday after Christmas Day"]];

function getHolidayDescription(isEN) {
    month = today.getMonth() + 1;
    date = today.getDate();
    for (i = 0; i < holiday.length; i++) {
            if (month === holiday[i][0] && date === holiday[i][1]) {
                return holidaydescription[isEN][i];
            }
        }
}

function getDayState() { //0: mon-fri, 1:sat, 2:sun, 3:pub. holidays
    today = new Date();
    weekday = today.getDay();
    month = today.getMonth() + 1;
    date = today.getDate();
    if(weekday === 0) {
        return 2;
    } else if(weekday === 6) {
        return 1;
    } else {
        for (i = 0; i < holiday.length; i++) {
            if (month === holiday[i][0] && date === holiday[i][1]) {                
                return 3;
            }
        }
        return 0;
    }    
}