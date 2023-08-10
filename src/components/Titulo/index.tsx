import TituloEstilo from './style'

export type Props = {
  children: string
  fontSize?: number
  margin?: number
}

const Titulo = (props: Props) => (
  <TituloEstilo margin={props.margin} fontSize={props.fontSize}>
    {props.children}
  </TituloEstilo>
)

export default Titulo
