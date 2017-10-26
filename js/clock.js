// Requires moment-with-locales.js for Indonesian support
// Requires moment-timezone-with-data-2012-2022 for Indonesian Timezone support
function updateClock ( )
{
  document.getElementById('clock').innerHTML = moment().locale('id').tz('Asia/Jakarta').format('k:mm:ss z');
  
//document.getElementById('miniclock').innerHTML = moment().locale('id').tz('Asia/Jakarta').format('k:mm');
}

