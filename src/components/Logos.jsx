import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import "../App.css"
function Logo(){
    return <>
    <div className='logo-div'>
       

        <div>
    <FontAwesomeIcon icon={faUsers} />
    <span>0</span>
    <p>Contributors</p>
    </div>
    <div>
    <FontAwesomeIcon icon={faCircleDot} />
    <span>0</span>
    <p>Issues</p>
    </div>
    <div>
    <FontAwesomeIcon icon={faStar} />
    <span>5</span>
    <p>Stars</p>
    </div>
    <div>
    <FontAwesomeIcon icon={faCodeFork} />
    <span>5</span>
    <p>Forks</p>
    </div>
    </div>
    </>
}
export default Logo;