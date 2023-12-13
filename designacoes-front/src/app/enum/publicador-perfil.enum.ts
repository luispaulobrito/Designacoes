export enum PublicadorPerfilEnum{

    SERVO_MINISTERIAL = 'SM',
    ANCIAO = 'AN',
    NAO_POSSUI = 'NP'
}

export const PublicadorPerfilEnumMapper = {
    [PublicadorPerfilEnum.SERVO_MINISTERIAL] : 'Servo Ministerial',
    [PublicadorPerfilEnum.ANCIAO] : 'Ancião',
    [PublicadorPerfilEnum.NAO_POSSUI] : 'Não Possui',
}

export const PublicadorPerfilOptions = [
    { value: PublicadorPerfilEnum.SERVO_MINISTERIAL, label: PublicadorPerfilEnumMapper[PublicadorPerfilEnum.SERVO_MINISTERIAL]},
    { value: PublicadorPerfilEnum.ANCIAO, label: PublicadorPerfilEnumMapper[PublicadorPerfilEnum.ANCIAO]},
    { value: PublicadorPerfilEnum.NAO_POSSUI, label: PublicadorPerfilEnumMapper[PublicadorPerfilEnum.NAO_POSSUI]},

]