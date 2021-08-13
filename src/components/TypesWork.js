import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'



const TypesWork = ({typeName, getDetails, defaultValue}) => {
    return (
        <div className="type-work-wrap" >
            <div className="type-work-item" onClick={(event)=> {getDetails(event, defaultValue)}}><p>{typeName}</p>
                <FontAwesomeIcon icon={faHome} />
            </div>
        </div>
    )
}



export default TypesWork;