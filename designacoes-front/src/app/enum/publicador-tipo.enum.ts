export enum PublicadorTipoEnum{

    PUBLICADOR = 'PB',
    PIONEIRO_AUXILIAR = 'PA',
    PIONEIRO_AUXILIAR_INDETERMINADO = 'PI',
    PIONEIRO_REGULAR = 'PR'
}

export const PublicadorTipoEnumMapper = {
    [PublicadorTipoEnum.PUBLICADOR] : 'Publicador',
    [PublicadorTipoEnum.PIONEIRO_AUXILIAR] : 'Pioneiro Auxiliar',
    [PublicadorTipoEnum.PIONEIRO_AUXILIAR_INDETERMINADO] : 'Pioneiro Auxiliar Indeterminado',
    [PublicadorTipoEnum.PIONEIRO_REGULAR] : 'Pioneiro Regular'
}

export const PublicadorTipoOptions = [
    { value: PublicadorTipoEnum.PUBLICADOR, label: PublicadorTipoEnumMapper[PublicadorTipoEnum.PUBLICADOR]},
    { value: PublicadorTipoEnum.PIONEIRO_AUXILIAR, label: PublicadorTipoEnumMapper[PublicadorTipoEnum.PIONEIRO_AUXILIAR]},
    { value: PublicadorTipoEnum.PIONEIRO_AUXILIAR_INDETERMINADO, label: PublicadorTipoEnumMapper[PublicadorTipoEnum.PIONEIRO_AUXILIAR_INDETERMINADO]},
    { value: PublicadorTipoEnum.PIONEIRO_REGULAR, label: PublicadorTipoEnumMapper[PublicadorTipoEnum.PIONEIRO_REGULAR]},

]