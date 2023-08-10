import styled from 'styled-components'
import { Props } from '.'

const TituloEstilo = styled.h3<Props>`
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'em' : '1.17em')};
  color: var(--cor-principal);
  margin-bottom: ${(props) => (props.margin ? props.margin + 'px' : '0px')};
`
export default TituloEstilo
