import { ChildAsFC } from './Child';

export const Parent = () => { 
    return <ChildAsFC color='red' onClick={() => console.log('clicked')}>
        <p>Alma</p>
    </ChildAsFC>
}

export default Parent;