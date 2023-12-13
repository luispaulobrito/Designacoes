export enum MesesEnum {
    JANEIRO = '1',
    FEVEREIRO = '2',
    MARCO = '3',
    ABRIL = '4',
    MAIO = '5',
    JUNHO = '6',
    JULHO = '7',
    AGOSTO = '8',
    SETEMBRO = '9',
    OUTUBRO = '10',
    NOVEMBRO = '11',
    DEZEMBRO = '12'
}

export const MesesEnumMapper = {
    [MesesEnum.JANEIRO]: 'Janeiro',
    [MesesEnum.FEVEREIRO]: 'Fevereiro',
    [MesesEnum.MARCO]: 'Março',
    [MesesEnum.ABRIL]: 'Abril',
    [MesesEnum.MAIO]: 'Maio',
    [MesesEnum.JUNHO]: 'Junho',
    [MesesEnum.JULHO]: 'Julho',
    [MesesEnum.AGOSTO]: 'Agosto',
    [MesesEnum.SETEMBRO]: 'Setembro',
    [MesesEnum.OUTUBRO]: 'Outubro',
    [MesesEnum.NOVEMBRO]: 'Novembro',
    [MesesEnum.DEZEMBRO]: 'Dezembro'
};

export const MesesOptions = [
    { value: MesesEnum.JANEIRO, label: MesesEnumMapper[MesesEnum.JANEIRO] },
    { value: MesesEnum.FEVEREIRO, label: MesesEnumMapper[MesesEnum.FEVEREIRO] },
    { value: MesesEnum.MARCO, label: MesesEnumMapper[MesesEnum.MARCO] },
    { value: MesesEnum.ABRIL, label: MesesEnumMapper[MesesEnum.ABRIL] },
    { value: MesesEnum.MAIO, label: MesesEnumMapper[MesesEnum.MAIO] },
    { value: MesesEnum.JUNHO, label: MesesEnumMapper[MesesEnum.JUNHO] },
    { value: MesesEnum.JULHO, label: MesesEnumMapper[MesesEnum.JULHO] },
    { value: MesesEnum.AGOSTO, label: MesesEnumMapper[MesesEnum.AGOSTO] },
    { value: MesesEnum.SETEMBRO, label: MesesEnumMapper[MesesEnum.SETEMBRO] },
    { value: MesesEnum.OUTUBRO, label: MesesEnumMapper[MesesEnum.OUTUBRO] },
    { value: MesesEnum.NOVEMBRO, label: MesesEnumMapper[MesesEnum.NOVEMBRO] },
    { value: MesesEnum.DEZEMBRO, label: MesesEnumMapper[MesesEnum.DEZEMBRO] }
];
