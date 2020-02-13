import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_318160";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_726822";
    item['en'] = "Rendezvous";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock2_69962";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock2_760871";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_498469";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_16377";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_541738";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_952248";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_556642";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_705789";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_710441";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_recommended_109198";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_913060";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_703058";
    item['en'] = "Recommended";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock2_498949";
    item['en'] = "Explore";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_289822";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock3_689332";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_385998";
    item['en'] = "My Events";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_978444";
    item['en'] = "trishani";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_310432";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_231961";
    item['en'] = "My questionnaire";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock2_475093";
    item['en'] = "Ryan\n30-35\nMale\nKansas City, MO";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock3_430445";
    item['en'] = "Five facts about me:\n\n- Charming\n\n- Good listener\n\n- Adventerous\n\n- I like long walk on the beach\n\n- From Canada";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_101533";
    item['en'] = "New button";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
