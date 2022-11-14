import * as S from './styles'
type Props ={
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color}: Props) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Value color={color}>R${value}</S.Value>
        </S.Container>
    )
}