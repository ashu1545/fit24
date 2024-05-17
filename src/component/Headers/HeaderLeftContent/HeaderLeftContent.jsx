import HeaderText from "../HeaderText/HeaderText"

const HeaderLeftContent = ({ headerTitle, svgIcon, headerColor }) => {
    return (
        <>
            {svgIcon}
            <HeaderText headerColor={headerColor}>{headerTitle}</HeaderText>
        </>
    )
}

export default HeaderLeftContent