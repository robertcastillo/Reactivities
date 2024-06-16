import React from 'react';
import { Activity } from '../../../app/models/activity';
import { Button, Divider, Item, ItemDescription, ItemHeader, ItemMeta, Label, Segment } from 'semantic-ui-react';

interface Props {
    activities: Activity[];
    selectActivity :(id : string) => void;
    deleteActivity: (id:string) => void;
}

export default function ActivityList({activities, selectActivity, deleteActivity}: Props) {
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
                            <Button onClick ={() => deleteActivity(activity.id)} floated='right' content='Delete' color='red'/>
                            <Label basic content={activity.category}/>
                        </Item.Extra>
                    </Item.Content>
                </Item>
              ))}  
            </Item.Group>
        </Segment>

    )
}
