import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'


const TypesWork = ({typeName, clickEvent, eClick}) => {

    
    return (
        <div className={`type-work-wrap ${eClick ? 'active-type' : ''}`} onClick={(e)=> clickEvent(e)}>
            <div><p>{typeName}</p>
                <FontAwesomeIcon icon={faHome} />
            </div>
        </div>
    )
}



export default TypesWork;