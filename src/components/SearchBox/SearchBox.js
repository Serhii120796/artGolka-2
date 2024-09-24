import { Wrapper, Input, IconSearch, IconClose } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      {value ? <IconClose onClick={() => onChange('')} /> : <IconSearch />}
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Пошук"
      />
    </Wrapper>
  );
};
