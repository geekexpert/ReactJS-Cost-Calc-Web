const SpacesWork = ({SpaceType, addSpace, defValue}) => {
    return (
        <div className="space-work">
            <span className="space-name">{SpaceType}</span>
            <span className="space-number"></span>
            <span className="space-minus">-</span>
            <span className="space-plus" onClick={()=> addSpace({defValue})}>+</span>
        </div>
    )
}
SpacesWork.defaultProps = {
    SpaceType : "Space Type:",
    TypeClass:"hide-class"
}
export default SpacesWork;
