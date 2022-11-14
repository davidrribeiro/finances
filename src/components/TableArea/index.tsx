import * as S from './styles'
import {Item} from '../../types/Item'
import { TableItem} from '../TableItem'


type Props = {
  list: Item[];
}

export const TableArea = ({list}: Props) =>{
    return (
      <S.Table>
        <thead>
          <tr>
            <S.TableHeadColumn width={100}>Data</S.TableHeadColumn>
            <S.TableHeadColumn width={100}>Category</S.TableHeadColumn>
            <S.TableHeadColumn>Title</S.TableHeadColumn>
            <S.TableHeadColumn width={100}>Valor</S.TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <TableItem key={index} item={item} />
          ))}
        </tbody>
      </S.Table>
    )
}