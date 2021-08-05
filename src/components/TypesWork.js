import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'



const TypesWork = ({typeName}) => {
    return (
        <div className="type-work-wrap">
            <div><p>{typeName}</p>
                <FontAwesomeIcon icon={faHome} />
            </div>
        </div>
    )
}



export default TypesWork;