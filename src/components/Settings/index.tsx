import { Locales, messages, useLocaleStore } from '../../stores/useLocaleStore';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { SettingsWrapper } from './styles';

const Settings = () => {
  const language = useLocaleStore(state => state.language);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(Locales[language]);
  const defaultValues = Object.keys(messages).map(key => ({
    label: Locales[key],
    value: key,
  }));
  const [items, setItems] = useState(defaultValues);

  const handleLanguageChange = (value: string | null) => {
    useLocaleStore.getState().setLanguage(value ?? 'en');
  };

  return (
    <SettingsWrapper>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onChangeValue={handleLanguageChange}
        setItems={setItems}
        theme='LIGHT'
        multiple={false}
        mode='BADGE'
      />
    </SettingsWrapper>
  );
};

export default Settings;
