import dictionary from 'dictionary';

describe('Dictionary', () => {
  let dictionaryInstance;
  
  const dictionaries = [
    require(`./locales/en-us.js`),
    require(`./locales/es-ec`)
  ];
  
  describe('es-ec', () => {
    beforeEach(() => {
      dictionaryInstance = dictionary({id: 'es-ec', dictionaries});
    });

    it('should instance dictionary.t and return correct translation', () => {
      expect(dictionaryInstance.t('key1', 'enOtherText1')).toBe('esTranslateKey1');
      expect(dictionaryInstance.t('key2', 'enOtherText2')).toBe('esTranslateKey2');
    });
  });
  
  describe('en-us', () => {
    beforeEach(() => {
      dictionaryInstance = dictionary({id: 'en-us', dictionaries});
    });

    it('should instance dictionary.t and return correct translation', () => {
      expect(dictionaryInstance.t('key1', 'esTranslateKey1')).toBe('enTranslateKey1');
      expect(dictionaryInstance.t('key2', 'esTranslateKey2')).toBe('enTranslateKey2');
    });
  });
  
  describe('when key not exist', () => {
    beforeEach(() => {
      dictionaryInstance = dictionary({id: 'es-ec', dictionaries});
    });
    
    it('should instance dictionary.t and return text if translation not exists', () => {
      expect(dictionaryInstance.t('key3', 'esTranslateKey3')).toBe('esTranslateKey3');
    });
  });
  
  describe('when dictionary not exist', () => {
    beforeEach(() => {
      dictionaryInstance = dictionary({id: 'notExist', dictionaries});
    });
    
    it('should instance dictionary.t and return text if translation not exists', () => {
      expect(dictionaryInstance.t('key3', 'esTranslateKey3')).toBe('esTranslateKey3');
    });
  });
});
