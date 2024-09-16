import css from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = css.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  margin: 5px 0;

  @media (min-width: 767px) {
    margin: 0;
}
  
`;

export const Input = css.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = css(HiSearch)`
display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;