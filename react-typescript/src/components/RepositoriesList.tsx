import { useState } from "react";
import { useActions } from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';


//import { actionCreators } from '../state';

//dispatch(actionCreators.searchRepositories(term) as any);
//dispatch(actionCreators.SearchRepositories(term))


const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { SearchRepositories } = useActions();
    const {data, loading, error} = useTypedSelector((state)  => state.repositories);
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();        
        SearchRepositories(term);
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={term} onChange={e=>setTerm(e.target.value)}/>
            <button>Search</button>
            { error && <p>{error}</p>}
            {loading && <p>{loading}</p>}
            {!error && !loading && data.map((item,index) => <li key={index}>{item}</li>)}
        </form>
        </>
}

export default RepositoriesList;
