// Require library
var excel = require('excel4node');

// Create a new instance of a Workbook class
var workbook = new excel.Workbook();

const countyCodes = {
    '01': 'ALAMEDA',
    '02': 'ALPINE',
    '03': 'AMADOR',
    '04': 'BUTTE',
    '05': 'CALAVERAS',
    '06': 'COLUSA',
    '07': 'CONTRA COSTA',
    '08': 'DEL NORTE',
    '09': 'EL DORADO',
    '10': 'FRESNO',
    '11': 'GLENN',
    '12': 'HUMBOLDT',
    '13': 'IMPERIAL',
    '14': 'INYO',
    '15': 'KERN',
    '16': 'KINGS',
    '17': 'LAKE',
    '18': 'LASSEN',
    '19': 'LOS ANGELES',
    '20': 'MADERA',
    '21': 'MARIN',
    '22': 'MARIPOSA',
    '23': 'MENDOCINO',
    '24': 'MERCED',
    '25': 'MODOC',
    '26': 'MONO',
    '27': 'MONTEREY',
    '28': 'NAPA',
    '29': 'NEVADA',
    '30': 'ORANGE',
    '31': 'PLACER',
    '32': 'PLUMAS',
    '33': 'RIVERSIDE',
    '34': 'SACRAMENTO',
    '35': 'SAN BENITO',
    '36': 'SAN BERNARDINO',
    '37': 'SAN DIEGO',
    '38': 'SAN FRANCISCO',
    '39': 'SAN JOAQUIN',
    '40': 'SAN LUIS OBISPO',
    '41': 'SAN MATEO',
    '42': 'SANTA BARBARA',
    '43': 'SANTA CLARA',
    '44': 'SANTA CRUZ',
    '45': 'SHASTA',
    '46': 'SIERRA',
    '47': 'SISKIYOU',
    '48': 'SOLANO',
    '49': 'SONOMA',
    '50': 'STANISLAUS',
    '51': 'SUTTER',
    '52': 'TEHAMA',
    '53': 'TRINITY',
    '54': 'TULARE',
    '55': 'TUOLUMNE',
    '56': 'VENTURA',
    '57': 'YOLO',
    '58': 'YUBA',
    '60': 'OUT OF STATE',
  };

// Add Worksheets to the workbook
var worksheet = workbook.addWorksheet('Jay 10');
worksheet.cell(1, 1).string('County Code Value');
worksheet.cell(1, 2).string('County Name');

// console.log(Object.keys(countyCodes).length);

let count = 1
for (let el in countyCodes){
    count +=1;
    worksheet.cell(count, 1).number(+el);
    worksheet.cell(count, 2).string(countyCodes[el]);
}

workbook.write('Excel.xlsx');