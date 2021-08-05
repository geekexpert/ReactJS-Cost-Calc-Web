const SpacesWork = ({SpaceType, addSpace, TypeClass}) => {
    return (
        <div className={`space-work ${TypeClass}`}>
            <span className="space-name">{SpaceType}</span>
            <span className="space-number"></span>
            <span className="space-minus">-</span>
            <span className="space-plus" onClick={()=> addSpace(100)}>+</span>
        </div>
    )
}
SpacesWork.defaultProps = {
    SpaceType : "Space Type:",
    TypeClass:"hide-class"
}
export default SpacesWork;
