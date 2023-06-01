
import {CLASS_LIST} from '../consts';

export const MinReq = ({show}) => {
    const finTo = Object.entries(CLASS_LIST).find(([key, value]) => key === show);
    const unwound = finTo ? finTo[1] : undefined;

return(
<>
<h3> {show} Qualifications </h3>
        <ul>
        {Object.keys(unwound).map(key => (
          <li key={key}>
            <strong>{key}:</strong> {unwound[key]}
          </li>
        ))}
      </ul>
</>

)

}
