import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


/**
 * The `errorText` property displays an error message below the Select Field.
 * This can be customised with the `errorStyle` property.
 */

type SelectCityProps = {
  citys: Array<{ name: string, value: number, }>,
  selectValue: number,
  isCitySelected: boolean,
  onChange: SyntheticEvent<T> => void,
};

const SelectCity = ({ citys, selectValue, onChange, isCitySelected }: SelectCityProps) =>
  (
      <SelectField
        value={selectValue}
        onChange={onChange}
        errorText={!isCitySelected && 'Выберите город'}
      >
        {citys.map((city, id) => {
          return <MenuItem key={city.value + id} value={city.value} primaryText={city.name} />
        })}
      </SelectField>
  );



const enhance = compose(
  withState('selectValue', 'setSelectValue', 0),
  withHandlers({
    onChange: (props) => (event, index, value) => {
      const findCityObject = props.citys.find(city => city.value === value);
      props.setSelectValue(value);
      props.setSelectCity(findCityObject.id);
      if (value > 0) {
        props.selectCity();
      }
      else {
        props.unselectCity();
      }
    },
  })
);
export default enhance(SelectCity);
