import { SyntheticEvent, useState } from 'react';
import { Activity } from '../../../app/models/activity';
import { Button, Item, ItemDescription, ItemHeader, ItemMeta, Label, Segment } from 'semantic-ui-react';

interface Props {
    activities: Activity[];
    selectActivity :(id : string) => void;
    deleteActivity: (id:string) => void;
    submitting: boolean;
}

export default function ActivityList({activities, selectActivity, deleteActivity, submitting}: Props) {
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment>
            <Item.Group divided>
              {activities.map(activity => (
                <Item key={activity.id}>
                    <Item.Content>
                        <ItemHeader as='a'>{activity.title}</ItemHeader>
                        <ItemMeta>{activity.date}</ItemMeta>
                        <ItemDescription>
                            <div>{activity.description}</div>
                            <div>{activity.city}</div>
                        </ItemDescription>
                        <Item.Extra>
                            <Button onClick ={() => selectActivity(activity.id)} floated='right' content='View' color='blue'/>
                            <Button 
                                name={activity.id}
                                loading = {submitting && target === activity.id} 
                                onClick ={(e) => handleActivityDelete(e, activity.id)} 
                                floated='right' 
                                content='Delete' 
                                color='red'
                        />
                        <Label basic content={activity.category}/>
                        </Item.Extra>
                    </Item.Content>
                </Item>
              ))}  
            </Item.Group>
        </Segment>

    )
}
